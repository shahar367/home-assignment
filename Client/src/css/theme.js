import { indigo, pink } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink,
    },
});

export default theme;