import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Banner from './components/Banner/Banner';
import Search from './components/Search/Search';
import Posts from './components/Posts/Posts';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {updateNewPostText} from "./redux/state";


function App(props: any) {
    return (
        <BrowserRouter>
            <div className="main_wrapper">
                <div className="header_wrapper">
                    <Header/>
                </div>
                <div className="content_wrapper">
                    <div className="nav">
                        <Search title={'Поиск'}/>
                        <Navigation/>
                    </div>
                    <div className="profile">
                        <Route path='/profile' render={() => <Banner/>}/>
                        <Route path='/profile' render={() => <Posts state={props.state.profilePage}
                                                                    addPost={props.addPost}
                                                                    updateNewPostText={props.updateNewPostText}/>}/>
                        <Route exact path='/dialogs'
                               render={() => <Dialogs name={props.state.dialogs.name} id={props.state.dialogs.id}/>}/>
                        <Route path='/music' render={() => <Banner/>}/>


                    </div>
                    <div className="login">
                        <Search title={'Search'}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
