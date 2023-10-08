import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { MyContext } from "../MyContext";
const src = "https://spoonacular.com/recipeImages/";
const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function Media(props) {
  const { cart, setCart, isCart } = React.useContext(MyContext);
  const { loading = false, data } = props;

  return (
    <Grid container wrap="nowrap" sx={{ justifyContent: "center" }}>
      {(loading ? Array.from(new Array(1)) : [data]).map((item, index) => (
        <Box
          key={index}
          sx={{
            width: 210,
            marginRight: 0.5,
            my: 5,
            fontFamily: "var(--font-a)",
          }}
        >
          {item ? (
            <img
              style={{ width: 210, height: 118 }}
              alt={item.title}
              src={src + item.image}
            />
          ) : (
            <Skeleton variant="rectangular" width={210} height={118} />
          )}
          {item ? (
            <Box sx={{ pr: 2, justifyContent: "center" }}>
              <Typography
                gutterBottom
                variant="body2"
                sx={{ fontFamily: "var(--font-a)", height: "3rem" }}
              >
                {item.title}
              </Typography>
              <Typography
                display="block"
                variant="caption"
                color="text.secondary"
                sx={{ fontFamily: "var(--font-a)" }}
              >
                Price: ${item?.price}
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "center", fontFamily: "var(--font-a)" }}
              >
                {cart.some((recipe) => recipe.id === item.id) ? (
                  <Button
                    color="error"
                    variant="outlined"
                    sx={{ fontFamily: "var(--font-a)" }}
                    onClick={() => {
                      const check = cart.findIndex((e) => e.id == item.id);
                      if (check != -1) {
                        const arr = [...cart];
                        arr.splice(check, 1);
                        setCart(arr);
                      }
                    }}
                  >
                    Remove From Cart
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    sx={{ fontFamily: "var(--font-a)" }}
                    onClick={() => {
                      setCart((p) => [{ ...item, quantity: 1 }, ...p]);
                    }}
                  >
                    Add To Cart
                  </Button>
                )}
              </Stack>
            </Box>
          ) : (
            <Box sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
      ))}
    </Grid>
  );
}

export default function Card({ item, loading = false }) {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading={loading} data={item} />
      {/* <Media /> */}
    </Box>
  );
}
