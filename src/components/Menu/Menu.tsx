import { FC, Fragment, useState } from "react";

import classes from "./Menu.module.scss"
import "./Menu.scss"

interface Props {

}

const Menu: FC<Props> = () => {
    const [open, setOpen] = useState(false)
    const [menuOpenAnimation, setMenuOpenAnimation] = useState(false)

    const toggleHandler = () => {
        setMenuOpenAnimation(!menuOpenAnimation)
        setTimeout(() => {
            setOpen(!open)
        }, 1000)
    }
    console.log(menuOpenAnimation)

    return (
        <div className={classes.Wrapper}>
            <div className={open ? menuOpenAnimation ? classes.MenuOpen : classes.MenuCloseInitiate : !menuOpenAnimation ? classes.MenuClosed : classes.MenuOpenInitiate}>
                {!open ?
                    <Fragment>
                        <div className={!menuOpenAnimation ? classes.BlackCircle : classes.BlackCircleFade}>

                        </div>
                        <div className={!menuOpenAnimation ? classes.IconHolder : classes.IconHolderFade}>
                            {open ?
                                <span className="material-symbols-outlined size-36" onClick={toggleHandler}>
                                    menu
                                </span>
                                :
                                <span className="material-symbols-outlined size-36" onClick={toggleHandler}>
                                    menu
                                </span>
                            }
                        </div>
                    </Fragment>
                    :
                    <Fragment>
                        <div className={classes.CloseIconWrapper}>
                            <div className={classes.CloseIcon}>
                                <span onClick={toggleHandler} className="material-symbols-outlined size-60">
                                    horizontal_rule
                                </span>
                                <span onClick={toggleHandler} className="material-symbols-outlined size-60">
                                    horizontal_rule
                                </span>
                            </div>
                        </div>
                        <ul>
                            <hr></hr>
                            <li>Home</li>
                            <li>Account</li>
                            <li>Settings</li>
                            <li>Log In</li>
                        </ul>
                    </Fragment>
                }
            </div>
        </div >
    )
}

export default Menu