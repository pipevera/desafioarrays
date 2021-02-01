let Radiología = [
  {
    "HORA": "11:00",
    "ESPECIALISTA": "IGNACIO SCHULZ",
    "PACIENTE": "FRANCISCA ROJAS",
    "RUT": "9878782-1",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "11:30",
    "ESPECIALISTA": "FEDERICO SUBERCASEAUX",
    "PACIENTE": "PAMELA ESTRADA",
    "RUT": "15345241-3",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "15:00",
    "ESPECIALISTA": "FERNANDO WURTHZ",
    "PACIENTE": "ARMANDO LUNA",
    "RUT": "16445345-9",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "15:30",
    "ESPECIALISTA": "ANA MARIA GODOY",
    "PACIENTE": "MANUEL GODOY",
    "RUT": "17666419-0",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "16:00",
    "ESPECIALISTA": "PATRICIA SUAZO",
    "PACIENTE": "RAMON ULLOA",
    "RUT": "14989389-K",
    "PREVISION": "FONASA"
  }
]

let Traumatología = [
  {
    "HORA": "8:00",
    "ESPECIALISTA": "MARIA PAZ ALTUZARRA",
    "PACIENTE": "PAULA SANCHEZ",
    "RUT": "15554774-5",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "10:00",
    "ESPECIALISTA": "RAUL ARAYA",
    "PACIENTE": "ANGÉLICA NAVAS",
    "RUT": "15444147-9",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "10:30",
    "ESPECIALISTA": "MARIA ARRIAGADA",
    "PACIENTE": "ANA KLAPP",
    "RUT": "17879423-9",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:00",
    "ESPECIALISTA": "ALEJANDRO BADILLA",
    "PACIENTE": "FELIPE MARDONES",
    "RUT": "15457423-6",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:30",
    "ESPECIALISTA": "CECILIA BUDNIK",
    "PACIENTE": "DIEGO MARRE",
    "RUT": "16554741-K",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "12:00",
    "ESPECIALISTA": "ARTURO CAVAGNARO",
    "PACIENTE": "CECILIA MENDEZ",
    "RUT": "9747535-8",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "12:30",
    "ESPECIALISTA": "ANDRES KANACRI",
    "PACIENTE": "MARCIAL SUAZO",
    "RUT": "11254785-5",
    "PREVISION": "ISAPRE"
  }
]

let Dental = [
  {
    "HORA": "8:30",
    "ESPECIALISTA": "ANDREA ZUÑIGA",
    "PACIENTE": "MARCELA RETAMAL",
    "RUT": "11123425-6",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:00",
    "ESPECIALISTA": "MARIA PIA ZAÑARTU",
    "PACIENTE": "ANGEL MUÑOZ",
    "RUT": "9878789-2",
    "PREVISION": "ISAPRE"
  },
  {
    "HORA": "11:30",
    "ESPECIALISTA": "SCARLETT WITTING",
    "PACIENTE": "MARIO KAST",
    "RUT": "7998789-5",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "13:00",
    "ESPECIALISTA": "FRANCISCO VON TEUBER",
    "PACIENTE": "KARIN FERNANDEZ",
    "RUT": "18887662-K",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "13:30",
    "ESPECIALISTA": "EDUARDO VIÑUELA",
    "PACIENTE": "HUGO SANCHEZ",
    "RUT": "17665461-4",
    "PREVISION": "FONASA"
  },
  {
    "HORA": "14:00",
    "ESPECIALISTA": "RAQUEL VILLASECA",
    "PACIENTE": "ANA SEPULVEDA",
    "RUT": "14441281-0",
    "PREVISION": "ISAPRE"
  }
]

console.log(Radiología.length);
console.log(Traumatología.length);
console.log(Dental.length);

console.log(Radiología[0].RUT, "-", Radiología[0].PREVISION);
console.log(Radiología[4].RUT, "-", Radiología[4].PREVISION);

console.log(Traumatología[0].RUT, "-", Traumatología[0].PREVISION);
console.log(Traumatología[Traumatología.length - 1].RUT, "-", Traumatología[Traumatología.length - 1].PREVISION);

console.log(Dental[0].RUT, "-", Dental[0].PREVISION);
console.log(Dental[Dental.length - 1].RUT, "-", Dental[Dental.length - 1].PREVISION);