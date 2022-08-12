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
import Auth from './Auth';
import ProtectedRoute from './ProtectedRoute';

import api from "../utils/api";
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

  /* tooltip handlers */
  function setTooltipParams(data) {
    setTooltip(data);
  }

  function changeRoute(data) {
    if(data.className === 'success') {
      console.log('Вы будуете перенаправлены');
    }
  }

  function toggleTooltipVisibility() {
    if(IsTooltipOpen) {
      changeRoute(Tooltip);
      setTooltipVisibility(false);
    } else {
      setTooltipVisibility(true);
    }
  }

  function handleSignupTooltip(data) {
    api.authUser(data, signupConfig)
      .then(res => {
        console.log(res);
        setTooltipParams(tooltipConfig.success);
        toggleTooltipVisibility();
      })
      .catch(err => {
        console.log(err);
        setTooltipParams(tooltipConfig.error);
        toggleTooltipVisibility();
      });
  }

  function handleSigninTooltip(data) {
    api.authUser(data, signinConfig)
      .then(res => {
        console.log(res);
        if(res.token) {
          const { token } = res;
          handleLoggedIn();
          localStorage.setItem('token', token);
          history.push('/');
        }
      })
      .catch(err => {
        console.log(err);
        setTooltipParams(tooltipConfig.error);
        toggleTooltipVisibility();
      });
  }

  return (
    <CurrentUserContext.Provider value={CurrentUser}>
        <Switch>
          <ProtectedRoute exact path="/" isLoggedIn={IsLoggedIn}>
            <Header>
              <div className="header__meta">
                <span className="header__link header__link_fs_default">email@mail.com</span>
                <button className="header__link header__link_fs_default header__link_color_light" type="button">Выйти</button>
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
              <Auth classMod="" formName="signup" title="Регистрация" btnCaption="Зарегистрироваться" isOpen={IsTooltipOpen} onUpdateTooltip={handleSignupTooltip} onHandleVisibility={toggleTooltipVisibility} />
            </TooltipContext.Provider>
          </Route>
          <Route exact path="/sign-in">
            <Header>
              <NavLink to="/sign-up" className="header__link">Регистрация</NavLink>
            </Header>
            <TooltipContext.Provider value={Tooltip}>
              <Auth classMod="form_offset_bottom" formName="signin" title="Вход" btnCaption="Войти" isOpen={IsTooltipOpen} onUpdateTooltip={handleSigninTooltip} onHandleVisibility={toggleTooltipVisibility} />
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
