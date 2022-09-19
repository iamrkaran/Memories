import { makeStyles } from "tss-react/mui";
export const useStyles = makeStyles()((theme) => {
    return {
        [theme.breakpoints.down("sm")]: {
        mainContainer: {
            flexDirection: "column-reverse",
        },
        },
    };
    }); 