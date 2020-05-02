import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "60%",
    margin: '0 auto',
    marginTop: '50px',
    marginBottom: '50px',
    color: 'black'
  }
}));

function Full() {
  const { Step } = Steps;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Steps direction="vertical" size="default" >
        <Step
        status="process"
          title="ANALIZA POTRZEB"
          description="By jak najlepiej poznać twoje potrzeby prosimy Cię o wypełnienie specjalnie przygotowanego formularza,
           który pozwoli nam lepiej poznać twoje zwyczaje, prowadzony tryb życia, czy ulubione style, kolory i materiały.
            Będzie on swoistą bazą, na której opierać będzie się cały projekt."
        />
        <Step
        status="process"
          title="INWENTARYZACJA"
          description="Przed rozpoczęciem właściwego procesu projektowego niezbędne jest poznanie dokładnych wymiarów poszczególnych wnętrz.
           Samodzielnie wykonujemy inwentaryzajcę lub pracujemy na dostarczonej nam dokumentacji."
        />
        <Step
        status="process"
          title="UKŁADY FUNKCJONALNE"
          description="Na podstawie dwóch poprzednich kroków proponujemy Ci kilka koncepcji układów funkcjonalnych wnętrza, 
          wykonane są one w formie rzutów poziomych z wymiarowaniem i zachowaniem skali.
           Znajdziesz na nich propozycje rozplanowania wnętrza z uwzględnieniem rozmieszczenia mebli i"
        />
        <Step
        status="process"
          title="WIZUALIZACJE"
          description="Po wybraniu i zaakceptowaniu konkretnego układu funkcjonalnego zabieramy się za przygotowanie projektu w formie 3d.
           Pracujemy na realnych materiałach i meblach, które mieszczą się w budżecie klienta. Dzięki serii fotorealistycznych 
           wizualizacji będziesz w stanie zobaczyć, jak finalniebędzie wyglądało twoje wnętrze. Od niedawna oferujemy także możliwość stworzenia panoramy 360stopni z"
        />
        <Step
        status="process"
          title="DOKUMENTACJA TECHNICZNA"
          description="Ostatni i jeden z najważniejszych etapów procesu projektowego. Dzięki starannie wykonanej dokumentacji technicznej 
          bez przeszkód zrealizujesz cały projekt. Znajdziesz tam m.in. plan zmian budowlanych, rozmieszczenie punktów elektrycznych, 
          instalacji wod-kan i c.o., projekt sufitów podwieszanych, ułożenia podłóg, płytek, kolorystykę ścian, czy szczegółowe rysunki mebli wykonanych na zamówienie. 
          Dodatkowo, w zależności od wybranego pakietu otrzymasz także kosztorys wszelkich prac remontowo-wykończeniowych oraz listę produktów, których użyto w"
        />
        
      </Steps>
    </div>
  );
}

export default Full;
