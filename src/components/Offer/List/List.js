import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import imgTop from "./image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    margin: "0 auto",
  },
  element: {
      minWidth: '250px',
    marginTop: '30px',
    width: "90%",
    margin: "0 auto",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "& img": {
      marginTop: "50px",
      marginBottom: "50px",
    },
    "& ul li":{
        listStyleType: 'none',
        textAlign: 'center',
        padding: 0
    },
    "& ul":{
        
        padding: 0
    },
    
  },
}));

function List() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Koncepcyjny</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li>- PROJEKT HYDRAULIKI I C.O.</li>
                <li>- PROJEKT ELEKTRYKI</li>
                <li>- PROJEKT ZABUDÓW STAŁYCH I</li>
                <li>SUFITÓW PODWIESZANYCH</li>
                <li>- PROJEKT PODŁÓG</li>
                <li>- PROJEKT MEBLI NA WYMIAR</li>
                <li>- DOBÓR STOLARKI DRZWIOWEJ i</li>
                <li>OKIENNEJ</li>
                <li>- WSPÓLNE ZAKUPY W SKLEPACH</li>
                <li>BRANŻOWYCH</li>
                <li>- OMÓWIENIE PROJEKTU Z EKIPĄ</li>
                <li>REMONTOWĄ</li>
                <li>-POMOC W SKŁADANIU ZAMÓWIEŃ</li>
                <li>- NADZÓR NAD PRACAMI</li>
                <li>WYKOŃCZENIOWYMI</li>
                <li>- DEKORACJA POMIESZCZEŃ</li>
                <li>- ZAKUP MATERIAŁÓW</li>
                <li>BUDOWLANYCH I</li>
                <li>WYKOŃCZENIOWYCH</li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li>- KOSZTORYS</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Kompleksowy</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li><b>+ PROJEKT HYDRAULIKI I C.O.</b></li>
                <li><b>+ PROJEKT ELEKTRYKI</b></li>
                <li><b>+ PROJEKT ZABUDÓW STAŁYCH I</b></li>
                <li><b>SUFITÓW PODWIESZANYCH</b></li>
                <li><b>+ PROJEKT PODŁÓG</b></li>
                <li><b>+ PROJEKT MEBLI NA WYMIAR</b></li>
                <li><b>+ DOBÓR STOLARKI DRZWIOWEJ i</b></li>
                <li><b>OKIENNEJ</b></li>
                <li>- WSPÓLNE ZAKUPY W SKLEPACH</li>
                <li>BRANŻOWYCH</li>
                <li><b>+ OMÓWIENIE PROJEKTU Z EKIPĄ</b></li>
                <li><b>REMONTOWĄ</b></li>
                <li>-POMOC W SKŁADANIU ZAMÓWIEŃ</li>
                <li>- NADZÓR NAD PRACAMI</li>
                <li>WYKOŃCZENIOWYMI</li>
                <li>- DEKORACJA POMIESZCZEŃ</li>
                <li>- ZAKUP MATERIAŁÓW</li>
                <li>BUDOWLANYCH I</li>
                <li>WYKOŃCZENIOWYCH</li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li><b>+ KOSZTORYS</b></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Pod Klucz</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li><b>+ PROJEKT HYDRAULIKI I C.O.</b></li>
                <li><b>+ PROJEKT ELEKTRYKI</b></li>
                <li><b>+ PROJEKT ZABUDÓW STAŁYCH I</b></li>
                <li><b>SUFITÓW PODWIESZANYCH</b></li>
                <li><b>+ PROJEKT PODŁÓG</b></li>
                <li><b>+ PROJEKT MEBLI NA WYMIAR</b></li>
                <li><b>+ DOBÓR STOLARKI DRZWIOWEJ i</b></li>
                <li><b>OKIENNEJ</b></li>
                <li><b>+ WSPÓLNE ZAKUPY W SKLEPACH</b></li>
                <li><b>BRANŻOWYCH</b></li>
                <li><b>+ OMÓWIENIE PROJEKTU Z EKIPĄ</b></li>
                <li><b>REMONTOWĄ</b></li>
                <li><b>+POMOC W SKŁADANIU ZAMÓWIEŃ</b></li>
                <li><b>+ NADZÓR NAD PRACAMI</b></li>
                <li><b>WYKOŃCZENIOWYMI</b></li>
                <li><b>+ DEKORACJA POMIESZCZEŃ</b></li>
                <li><b>+ ZAKUP MATERIAŁÓW</b></li>
                <li><b>BUDOWLANYCH I</b></li>
                <li><b>WYKOŃCZENIOWYCH</b></li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li><b>+ KOSZTORYS</b></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Koncepcyjny</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li>- PROJEKT HYDRAULIKI I C.O.</li>
                <li>- PROJEKT ELEKTRYKI</li>
                <li>- PROJEKT ZABUDÓW STAŁYCH I</li>
                <li>SUFITÓW PODWIESZANYCH</li>
                <li>- PROJEKT PODŁÓG</li>
                <li>- PROJEKT MEBLI NA WYMIAR</li>
                <li>- DOBÓR STOLARKI DRZWIOWEJ i</li>
                <li>OKIENNEJ</li>
                <li>- WSPÓLNE ZAKUPY W SKLEPACH</li>
                <li>BRANŻOWYCH</li>
                <li>- OMÓWIENIE PROJEKTU Z EKIPĄ</li>
                <li>REMONTOWĄ</li>
                <li>-POMOC W SKŁADANIU ZAMÓWIEŃ</li>
                <li>- NADZÓR NAD PRACAMI</li>
                <li>WYKOŃCZENIOWYMI</li>
                <li>- DEKORACJA POMIESZCZEŃ</li>
                <li>- ZAKUP MATERIAŁÓW</li>
                <li>BUDOWLANYCH I</li>
                <li>WYKOŃCZENIOWYCH</li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li>- KOSZTORYS</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Kompleksowy</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li><b>+ PROJEKT HYDRAULIKI I C.O.</b></li>
                <li><b>+ PROJEKT ELEKTRYKI</b></li>
                <li><b>+ PROJEKT ZABUDÓW STAŁYCH I</b></li>
                <li><b>SUFITÓW PODWIESZANYCH</b></li>
                <li><b>+ PROJEKT PODŁÓG</b></li>
                <li><b>+ PROJEKT MEBLI NA WYMIAR</b></li>
                <li><b>+ DOBÓR STOLARKI DRZWIOWEJ i</b></li>
                <li><b>OKIENNEJ</b></li>
                <li>- WSPÓLNE ZAKUPY W SKLEPACH</li>
                <li>BRANŻOWYCH</li>
                <li><b>+ OMÓWIENIE PROJEKTU Z EKIPĄ</b></li>
                <li><b>REMONTOWĄ</b></li>
                <li>-POMOC W SKŁADANIU ZAMÓWIEŃ</li>
                <li>- NADZÓR NAD PRACAMI</li>
                <li>WYKOŃCZENIOWYMI</li>
                <li>- DEKORACJA POMIESZCZEŃ</li>
                <li>- ZAKUP MATERIAŁÓW</li>
                <li>BUDOWLANYCH I</li>
                <li>WYKOŃCZENIOWYCH</li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li><b>+ KOSZTORYS</b></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} m={4}>
            <div className={classes.element}>
              <img src={imgTop} alt="imgTop" />
              <h2>Projekt Pod Klucz</h2>
              <ul>
                <li><b>+ WYWIAD INWESTORSKI</b></li>
                <li><b>+ INWENTARYZACJA</b></li>
                <li><b>+ UKŁAD FUNKCJONALNY</b></li>
                <li><b>+ WIZUALIZACJE</b></li>
                <li><b>+ PROJEKT HYDRAULIKI I C.O.</b></li>
                <li><b>+ PROJEKT ELEKTRYKI</b></li>
                <li><b>+ PROJEKT ZABUDÓW STAŁYCH I</b></li>
                <li><b>SUFITÓW PODWIESZANYCH</b></li>
                <li><b>+ PROJEKT PODŁÓG</b></li>
                <li><b>+ PROJEKT MEBLI NA WYMIAR</b></li>
                <li><b>+ DOBÓR STOLARKI DRZWIOWEJ i</b></li>
                <li><b>OKIENNEJ</b></li>
                <li><b>+ WSPÓLNE ZAKUPY W SKLEPACH</b></li>
                <li><b>BRANŻOWYCH</b></li>
                <li><b>+ OMÓWIENIE PROJEKTU Z EKIPĄ</b></li>
                <li><b>REMONTOWĄ</b></li>
                <li><b>+POMOC W SKŁADANIU ZAMÓWIEŃ</b></li>
                <li><b>+ NADZÓR NAD PRACAMI</b></li>
                <li><b>WYKOŃCZENIOWYMI</b></li>
                <li><b>+ DEKORACJA POMIESZCZEŃ</b></li>
                <li><b>+ ZAKUP MATERIAŁÓW</b></li>
                <li><b>BUDOWLANYCH I</b></li>
                <li><b>WYKOŃCZENIOWYCH</b></li>
                <li><b>+ SPIS MATERIAŁÓW</b></li>
                <li><b>+ KOSZTORYS</b></li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default List;
