import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const currencies = [
  {
    value: "wyc",
    label: "Wycena projektu"
  },
  {
    value: "zap",
    label: "Pytanie ogólne"
  },
  {
    value: "kons",
    label: "Konsultacja"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    
    width: "100%",
    "& > *": {
      width: "100%"
    }
  },
  button: {
    width: "100%",
    background: "#050d18"
  },
  text: {
    // [theme.breakpoints.down("sm")]: {
    //   fontSize: "12px"
    // },
    // [theme.breakpoints.up("md")]: {
    //   fontSize: "15px"
    // },
    marginTop: '30px',
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
    lineHeight: 2,
    "& p": {
        marginBottom: '60px'
      }

  },
  container: {
    width: "60%",
    margin: "0 auto",
    marginBottom: '100px',
    "& p": {
      textAlign: "center",
      fontSize: "13px",
    },
    "& h4": {
      textAlign: "center"
    }
  }
}));

function ContactForm() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("wyc");

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <div className={classes.text}>
        <h1>napisz do nas</h1>
        <p>
          Jeśli masz jakieś pytania, chętnie na nie odpowiemy, wyślij nam maila
          lub skorzystaj z poniższego formularza.<br></br> Chciałeś tylko prosić o
          wycenę? Nic prostrzego, wystarczy, że wypełnisz naszą ankietę, a
          otrzymasz ofertę <br></br>przygotowaną specjalnie dla Ciebie - znajdziesz ją
          poniżej!
        </p>
      </div>
      <Grid container spacing={1} className={classes.container}>
        <Grid item xs={12} sm={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Imię" variant="outlined" />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Telefon (opcjionalnie)"
              variant="outlined"
              type="number"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.root}
            id="outlined-select-currency"
            select
            label="Temat"
            value={currency}
            onChange={handleChange}
            // helperText="Please select your currency"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Wiadomość"
              variant="outlined"
              multiline={true}
              rows="6"
            />
          </form>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
          >
            WYŚLIJ
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            disableElevation
          >
            ANKIETA
          </Button>
        </Grid>
        <Grid item xs={12}>
          <p>
            Korzystając z powyższych formularzy zgadzasz się na wykorzystanie
            twoich danych zgodnie z Polityką Prywatności.
          </p>
          <h4>pracownia@diaadesign.pl +48 790 467 567</h4>
        </Grid>
      </Grid>
    </>
  );
}
export default ContactForm;
