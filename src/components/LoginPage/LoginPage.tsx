import React, {FC} from 'react';
import './LoginPage.css'

const LoginPage: FC = () => {
    return (
        <div>
            <div className='welcomeBlock'>
                <div className='loginBlock'>
                    <h1>Добро пожаловать</h1>
                    <p>Авторизуйтесь, чтобы войти в систему</p>
                    <input type="text" placeholder="E-mail"/> 
                    <br/>
                    <input type="text" placeholder="Пароль"/>
                    <br/>
                    <button>Авторизация</button>
                    <a href="/reset_pass">Забыли пароль?</a>
                </div>
                <div className="create"><p>Нет учетной записи ?<a href="url">Зарегистрируйте</a></p></div>
            </div>
            <div className='leftImage'>
                <img src='/src/svg/book-lovers-1.svg'/>
            </div>
        </div>
    );
};

export default LoginPage;