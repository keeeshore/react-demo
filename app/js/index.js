/**
 * Created by balank on 21/12/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/MainComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

ReactDOM.render(
    <HeaderComponent />,
    document.getElementById('header')
);

ReactDOM.render(
    <MainComponent />,
    document.getElementById('main')
);

ReactDOM.render(
    <FooterComponent />,
    document.getElementById('footer')
);