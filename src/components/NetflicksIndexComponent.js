import './NetflicksIndexComponent.css'
import NetflicksHeaderComponent from './NetflicksHeaderComponent';
import NetflicksMainComponent from './NetflicksMainComponent';
import {NetflicksRegisterComponent} from './NetflicksRegisterComponent';
import NetflicksFooterComponent from './NetflicksFooterComponent';

export default function NetflicksIndexComponent(){
    return (
        <div className="container-fluid">
            <div className='box'>
                <header>
                    <NetflicksHeaderComponent/>
                </header>
                
                <section  className='d-flex justify-content-center align-items-center'>
                    <main>
                        <NetflicksMainComponent/>
                        <NetflicksRegisterComponent/>
                    </main>
                </section>
                <footer className='m-2 p-2'>
                    <NetflicksFooterComponent/>
                </footer>
            </div>
            
        </div>
    )
}