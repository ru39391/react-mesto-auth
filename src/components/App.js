import React from 'react';
import { NavLink, Route, Switch, useHistory, Redirect } from "react-router-dom";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import AuthForm from './AuthForm';
import ProtectedRoute from './ProtectedRoute';

import api from "../utils/api";
import auth from "../utils/auth";
import {tooltipConfig, signupConfig, signinConfig} from '../utils/constants';
import CurrentUserContext from '../contexts/CurrentUserContext';
import TooltipContext from '../contexts/TooltipContext';
import profileAvatar from '../images/profile/profile__avatar.png';
import iconShow from '../images/icons/icon-show.svg';
import iconClose from '../images/icons/icon-close.svg';

function App() {
  const history = useHistory();
  const [CurrentUser, setCurrentUser] = React.useState({
    id: null,
    name: 'Жак-Ив Кусто',
    about: 'Исследователь океана',
    avatar: profileAvatar
  });
  const [Cards, setCardList] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser({
          id: userData._id,
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar
        });
        setCardList(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /* popup handlers */
  const [IsEditProfilePopupOpen, setEditProfilePopupActive] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupActive(true);
  };

  const [IsEditAvatarPopupOpen, setEditAvatarPopupActive] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupActive(true);
  };

  const [IsAddPlacePopupOpen, setAddPlacePopupActive] = React.useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupActive(true);
  };

  const [SelectedCard, setSelectedCard] = React.useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupActive(false);
    setEditAvatarPopupActive(false);
    setAddPlacePopupActive(false);
    setSelectedCard(null);
  }  
  
  /* user handlers */
  function handleUpdateUser(data) {
    api.setUserData(data)
      .then(res => {
        CurrentUser.name = res.name;
        CurrentUser.about = res.about;
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(data) {
    api.setUserPic(data)
      .then(res => {
        CurrentUser.avatar = res.avatar;
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* card handlers */
  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then(res => {
        setCardList([res, ...Cards]); 
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === CurrentUser.id);
    api.changeLikeCardStatus({
      id: card._id,
      isLiked: !isLiked
    })
      .then(res => {
        setCardList(state => state.map(item => item._id === card._id ? res : item));
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.removeCard({
      id: card._id
    })
      .then(res => {
        setCardList(state => state.filter(item => item._id !== card._id));
      })
      .catch(err => {
        console.log(err);
      });
  }

  /* tooltip params */
  const [Tooltip, setTooltip] = React.useState({
    className: '',
    title: '',
    icon: ''
  });
  const [IsTooltipOpen, setTooltipVisibility] = React.useState(false);

  /* logged status params */
  const [IsLoggedIn, setLoggedIn] = React.useState(false);
  function handleLoggedIn() {
    setLoggedIn(true);
  };

  const [UserData, setUserData] = React.useState({});
  function handleUserData(data) {
    setUserData(data);
  };

  /* tooltip handlers */
  function setTooltipParams(data) {
    setTooltip(data);
  }

  function redirectToSignin(data) {
    if(data.className === 'success') {
      history.push('/sign-in');
    }
  }

  function toggleTooltipVisibility() {
    if(IsTooltipOpen) {
      redirectToSignin(Tooltip);
      setTooltipVisibility(false);
    } else {
      setTooltipVisibility(true);
    }
  }

  function signUp(data) {
    auth.authUser(data, signupConfig)
      .then(res => {
        //console.log(res);
        setTooltipParams(tooltipConfig.success);
        toggleTooltipVisibility();
      })
      .catch(err => {
        console.log(err);
        setTooltipParams(tooltipConfig.error);
        toggleTooltipVisibility();
      });
  }

  function signIn(data) {
    auth.authUser(data, signinConfig)
      .then(res => {
        //console.log(res);
        if(res.token) {
          const { token } = res;
          localStorage.setItem('token', token);
          handleLoggedIn();
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
        setTooltipParams(tooltipConfig.error);
        toggleTooltipVisibility();
      });
  }

  function signOut(){
    localStorage.removeItem('token');
    history.push('/sign-in');
  }

  function checkToken() {
    const jwt = localStorage.getItem('token');
    //console.log(jwt);
    if(jwt) {
      auth.getUserToken(jwt)
        .then(res => {
          //console.log(res.data);
          const {_id, email} = res.data;
          handleUserData({
            id: _id,
            email: email
          });
          handleLoggedIn();
          history.push('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }

  React.useEffect(() => {
    checkToken();
  }, [IsLoggedIn]);

  return (
    <CurrentUserContext.Provider value={CurrentUser}>
        <Switch>
          <ProtectedRoute exact path="/" isLoggedIn={IsLoggedIn}>
            <Header>
              <div className="header__meta">
                <a className="header__link header__link_fs_default" href={`mailto:${UserData.email}`}>{UserData.email}</a>
                <button className="header__link header__link_fs_default header__link_color_light" type="button" onClick={signOut}>Выйти</button>
              </div>

              <button className="header__toggler" type="button">
                <img className="header__toggler-icon" src={iconShow} alt="Показать меню" />
                <img className="header__toggler-icon header__toggler-icon_invisible" src={iconClose} alt="Скрыть меню" />
              </button>
            </Header>
            <Main cards={Cards} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
            <Footer />
            <ImagePopup card={SelectedCard} onClose={closeAllPopups} />
            <EditProfilePopup isOpen={IsEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={IsEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={IsAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
            <PopupWithForm title="Вы уверены?" className="remove-card" formName="removeCard" btnCaption="Да" />
          </ProtectedRoute>
          <Route exact path="/sign-up">
            <Header>
              <NavLink to="/sign-in" className="header__link">Войти</NavLink>
            </Header>
            <TooltipContext.Provider value={Tooltip}>
              <AuthForm classMod="" formName="signup" title="Регистрация" btnCaption="Зарегистрироваться" isOpen={IsTooltipOpen} onUpdateTooltip={signUp} onHandleVisibility={toggleTooltipVisibility} />
            </TooltipContext.Provider>
          </Route>
          <Route exact path="/sign-in">
            <Header>
              <NavLink to="/sign-up" className="header__link">Регистрация</NavLink>
            </Header>
            <TooltipContext.Provider value={Tooltip}>
              <AuthForm classMod="form_offset_bottom" formName="signin" title="Вход" btnCaption="Войти" isOpen={IsTooltipOpen} onUpdateTooltip={signIn} onHandleVisibility={toggleTooltipVisibility} />
            </TooltipContext.Provider>
          </Route>
          <Route>
            {IsLoggedIn ? (<Redirect to="/" />) : (<Redirect to="/sign-in" />)}
          </Route>
        </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
