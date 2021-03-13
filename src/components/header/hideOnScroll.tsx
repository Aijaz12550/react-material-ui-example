import { FC, memo } from "react"
import { Slide, useScrollTrigger } from "@material-ui/core"

const HideOnScroll: FC<any> = (props) => {
    let { children, window } = props
    let trigger = useScrollTrigger({ target: window ? window() : undefined })
    return (
        <Slide appear={false} direction="down" in={!trigger}  >
            {children}

        </Slide>
    )
}

export default memo(HideOnScroll);