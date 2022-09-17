import { makeStyles } from "tss-react/mui";


const useStyles = makeStyles()((theme) => {
    return {  
      appBar: {
        borderRadius: 15,
        height: "100px",
        backgroundColor: "#efefef",
        margin: "30px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      },
      heading: {
        color: "rgba(0,183,255, 1)",
      },
      image: {
        marginLeft: "15px",
      },
       
    };
  });
  
export default useStyles;