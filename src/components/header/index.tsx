import { FC, Fragment, memo } from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import { useStyles } from "./style";
import HideOnSroll from "./hideOnScroll"

type Props = {
    title?: string
}




const Header: FC<Props> = (props) => {

    let classes = useStyles();

    return (
        <Fragment>
            <HideOnSroll>
                <AppBar className={classes.header}>
                    <Toolbar>

                        <Typography variant="h6">
                            {props.title}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </HideOnSroll>
            <Toolbar />
        </Fragment>
    )
}

export default memo(Header);