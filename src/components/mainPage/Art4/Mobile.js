import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "50px",
    width: "80%",
    margin: "0 auto",
    
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    
    }
}));

function Mobile() {
  const classes = useStyles();

  return (
    <>
    
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>ANALIZA POTRZEB</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            By jak najlepiej poznać twoje potrzeby prosimy Cię o wypełnienie specjalnie przygotowanego formularza, który pozwoli nam lepiej poznać twoje zwyczaje, prowadzony tryb życia, czy ulubione style, kolory i materiały. Będzie on swoistą bazą, na której opierać będzie się cały projekt.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>INWENTARYZACJA</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Przed rozpoczęciem właściwego procesu projektowego niezbędne jest poznanie dokładnych wymiarów poszczególnych wnętrz. Samodzielnie wykonujemy inwentaryzajcę lub pracujemy na dostarczonej nam dokumentacji.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>UKŁADY FUNKCJONALNE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Na podstawie dwóch poprzednich kroków proponujemy Ci kilka koncepcji układów funkcjonalnych wnętrza, wykonane są one w formie rzutów poziomych z wymiarowaniem i zachowaniem skali. Znajdziesz na nich propozycje rozplanowania wnętrza z uwzględnieniem rozmieszczenia mebli i
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>WIZUALIZACJE</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Po wybraniu i zaakceptowaniu konkretnego układu funkcjonalnego zabieramy się za przygotowanie projektu w formie 3d. Pracujemy na realnych materiałach i meblach, które mieszczą się w budżecie klienta. Dzięki serii fotorealistycznych wizualizacji będziesz w stanie zobaczyć, jak finalniebędzie wyglądało twoje wnętrze. Od niedawna oferujemy także możliwość stworzenia panoramy 360stopni z
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>DOKUMENTACJA TECHNICZNA</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Ostatni i jeden z najważniejszych etapów procesu projektowego. Dzięki starannie wykonanej dokumentacji technicznej bez przeszkód zrealizujesz cały projekt. Znajdziesz tam m.in. plan zmian budowlanych, rozmieszczenie punktów elektrycznych, instalacji wod-kan i c.o., projekt sufitów podwieszanych, ułożenia podłóg, płytek, kolorystykę ścian, czy szczegółowe rysunki mebli wykonanych na zamówienie. Dodatkowo, w zależności od wybranego pakietu otrzymasz także kosztorys wszelkich prac remontowo-wykończeniowych oraz listę produktów, których użyto w
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    
    
    </>

  );
}
export default Mobile;
