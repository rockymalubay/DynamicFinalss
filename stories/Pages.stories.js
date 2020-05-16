import React from 'react';
// import QuestionPage_1 from '../Pages/QuestionPages/QuestionPage_1';
import AnorexiaPage from '../pages/AboutPage_Anorexia';
import QuestionPage_1 from '../pages/QuestionPages/QuestionPage_1';
import QuestionPage_2 from '../pages/QuestionPages/QuestionPage_2';
import QuestionPage_3 from '../pages/QuestionPages/QuestionPage_3';
import QuestionPage_4 from '../pages/QuestionPages/QuestionPage_4';
import HotlinePage from '../pages/HotlinePage';
import BingePage from '../pages/AboutPage_Binge';
import BulimiaPage from '../pages/AboutPage_Bulimia';
import LandingPage from '../pages/LandingPage';

export default {
    title:"My Pages",
    component:AnorexiaPage
}

export const MyLandingPage = () =>
<div>
    <LandingPage/>
</div>

export const AnorexiaAboutPage = () =>
<div>
    <AnorexiaPage/>
</div>

export const BulimiaAboutPage = () =>
<div>
    <BulimiaPage/>
</div>

export const BingeEatingAboutPage = () =>
<div>
    <BingePage/>
</div>


export const Question1 = () =>
<div>
    <QuestionPage_1/>
</div>

export const Question2 = () =>
<div>
    <QuestionPage_2/>
</div>
export const Question3 = () =>
<div>
    <QuestionPage_3/>
</div>
export const Question4 = () =>
<div>
    <QuestionPage_4/>
</div>

export const Hotline = () =>
<div>
    <HotlinePage/>
</div>