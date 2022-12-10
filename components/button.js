import Styles from './button.module.css';

export default function button({children, text}) {
    return (
        <div className={Styles.buttons}>
            <div className={Styles.button}>
                <p className={Styles.buttonText}>{children}</p>
            </div>
        
        </div>
    );
}