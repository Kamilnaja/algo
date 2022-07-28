import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnkietaOutput } from '@ikp/profilaktyka/ankiety/models/ankieta-output.interface';
import { ListaAnkietOutput } from '@ikp/profilaktyka/ankiety/models/lista-ankiet-output.interface';
import { Observable, of } from 'rxjs';

@Injectable()
export class AnkietyService {
  constructor(private httpClient: HttpClient) {}

  public pobierzAnkiety(): Observable<ListaAnkietOutput> {
    return this.httpClient.get<ListaAnkietOutput>(`/ikp/ankiety/wyszukaj`);
  }

  public udzielLubOdrzucZgode(czyUdzielonoZgody: boolean): Observable<string> {
    const params = new HttpParams().append('czyUdzielonoZgody', czyUdzielonoZgody.toString());
    return this.httpClient.post<string>(`/ikp/ankiety/zgoda`, {}, { params });
  }

  public pobierzSzczegolyAnkiety(identyfikatorAnkiety: number): Observable<AnkietaOutput> {
    const definicja = {
      definicja: `{"plec": "M", "pages": [{"elements": [{"name": "panel4LewaStrona", "type": "panel", "visible": false, "zalecenia": true}]}, {"name": "Dieta", "type": "page", "title": "Część piąta", "elements": [{"name": "panel5LewaStrona", "type": "panel", "visible": false, "elements": [{"html": "<div>Zachęcamy do większego urozmaicenia diety w warzywa i regularnego spożywania najlepiej ponad 5 porcji świeżych warzyw dziennie.</div>", "name": "response18a", "type": "html", "visibleIf": "{question18} == item1 or {question18} == item2 or {question18} == item3", "zalecenie": true}, {"html": "<div>Gratulujemy spożywania właściwej ilości warzyw i zachęcamy do kontynuowania zdrowej diety.</div>", "name": "response18c", "type": "html", "visibleIf": "{question18} == item4", "zalecenie": true}, {"html": "<div>Dieta bogata w warzywa pomoże Panu utrzymać właściwy poziom cukru we krwi.</div>", "name": "response18d", "type": "html", "visibleIf": "({question18} == item1 or {question18} == item2) and ({question10} == item1 or ({question13.PoziomCukruWeKrwi} >= 100 and {PoziomCukruNieWiem} = false))", "zalecenie": true}, {"html": "<div>Dieta bogatsza w warzywa pomoże Panu utrzymać właściwy poziom cholesterolu we krwi.</div>", "name": "response18e", "type": "html", "visibleIf": "({question18} == item1 or {question18} == item2) and ({question14} == item1 or ({question17.PoziomCholesteroluCalkowitego} >= 195 and {PoziomCholesteroluNieWiem}=false))", "zalecenie": true}, {"html": "<div>Zachęcamy do urozmaicenia diety w owoce i regularnie ich spożywanie.</div>", "name": "response19a", "type": "html", "visibleIf": "{question19} == item1 or {question19} == item2", "zalecenie": true}, {"html": "<div>Postaraj się o jeszcze większe urozmaicenie diety w owoce.</div>", "name": "response19b", "type": "html", "visibleIf": "{question19} == item3", "zalecenie": true}, {"html": "<div>Gratulujemy, spożywa Pan odpowiednią ilość owoców. Zachęcamy do kontynuowania zdrowej diety.</div>", "name": "response19c", "type": "html", "visibleIf": " {question19} == item4", "zalecenie": true}, 

{"name": "BMI", 
"type": "expression", "visibleIf": "false", "expression": "{question22.waga}/({question22.wzrost}*{question22.wzrost}*0.0001)", "displayStyle": "decimal", "maximumFractionDigits": "1"}, {"name": "WagaMin", "type": "expression", "visibleIf": "false", "expression": "18.5*({question22.wzrost}*{question22.wzrost}*0.0001)", "displayStyle": "decimal", "maximumFractionDigits": "0"}, 

{"name": "WagaMax", "type": "expression", "visibleIf": "false", "expression": "24.9*({question22.wzrost}*{question22.wzrost}*0.0001)", "displayStyle": "decimal", "maximumFractionDigits": "0"}, {"html": "<div>Zachęcamy do ograniczenia spożywania wyrobów typu fast food oraz dań wysoko przetworzonych.</div>", "name": "response20a", "type": "html", "visibleIf": "{question20} == item3 or {question20} == item4", "zalecenie": true}, {"html": "<div>Rzadsze spożywanie posiłków typu fast-food może pomóc w utrzymaniu prawidłowej wartości ciśnienia tętniczego.</div>", "name": "response20c", "type": "html", "visibleIf": "({question20} == item3 or {question20} == item4) and ({question6} == item1 or (({question9.skurczowe} >= 140 or {question9.rozkurczowe} >= 90) and  {CisnienieKrwiNieWiem} = false))", "zalecenie": true}, {"html": "<div>Rzadsze spożywanie produktów typu fast-food może pomóc w utrzymaniu prawidłowej wartości cukru we krwi.</div>", "name": "response20d", "type": "html", "visibleIf": "({question20} == item3 or {question20} == item4) and ({question10} == item1 or ({question13.PoziomCukruWeKrwi} >= 100 and {PoziomCukruNieWiem} = false))", "zalecenie": true}, {"html": "<div>Rzadsze spożywanie produktów typu fast-food może się przyczynić do ograniczenia wysokich wartości cholesterolu we krwi.</div>", "name": "response20e", "type": "html", "visibleIf": "({question20} == item3 or {question20} == item4) and ({question14} == item1 or ({question17.PoziomCholesteroluCalkowitego} >= 195 and {PoziomCholesteroluNieWiem}=false))", "zalecenie": true}, {"html": "<div>Znaczne ograniczenie spożycia produktów fast-food pomoże Panu zrzucić wagę.</div>", "name": "response20f", "type": "html", "visibleIf": "({question20} == item3 or {question20} == item4) and {BMI} >= 25", "zalecenie": true}, {"html": "<div>Gratulujemy eliminacji dań typu fast-food z jadłospisu. Zachęcamy do kontynuowania tego zdrowego nawyku.</div>", "name": "response20g", "type": "html", "visibleIf": "{question20} == item1", "zalecenie": true}, {"html": "<div>Zachęcamy do ograniczenia spożycia słodzonych produktów zarówno słodyczy jak i napojów.</div>", "name": "response21a", "type": "html", "visibleIf": "{question21} == item3 or {question21} == item4", "zalecenie": true}, {"html": "<div>Mniej słodyczy i słodkich napojów w jadłospisie pozwoli utrzymać Panu niższy poziom cukru we krwi.</div>", "name": "response21c", "type": "html", "visibleIf": "({question21} == item3 or {question21} == item4) and ({question10} == item1 or ({PoziomCukruNieWiem} == false and {question13.PoziomCukruWeKrwi} >= 100)) ", "zalecenie": true}, {"html": "<div>Znaczne ograniczenie spożycia słodzonych produktów i słodyczy pomoże Panu zrzucić wagę.</div>", "name": "response21d", "type": "html", "visibleIf": "({question21} == item3 or {question21} == item4) and {BMI} >= 25", "zalecenie": true}, {"html": "<div>Gratulujemy znacznego ograniczenia spożycia słodyczy i słodkich napoi. Zachęcamy do kontynuowania tego zdrowego nawyku.</div>", "name": "response21e", "type": "html", "visibleIf": "{question21} == item1 or {question21} == item2", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></div>", "name": "response22X", "type": "html", "visibleIf": "({question22.wzrost} empty) or ({question22.waga} empty)", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></br></br>Pana BMI <b>{BMI}</b></br> Prawidłowa waga dla podanego wzrostu jest większa od {WagaMin} kg oraz mniejsza od {WagaMax} kg.</br></br>Ma Pan niedowagę.</div>", "name": "response22a", "type": "html", "visibleIf": "{BMI} < 18.5 and {BMI} > 15", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></br></br>Pana BMI <b>{BMI}</b></br> Prawidłowa waga dla podanego wzrostu jest większa od {WagaMin} kg oraz mniejsza od {WagaMax} kg.</br></br>Gratulujemy utrzymywania prawidłowej masy ciała.</div>", "name": "response22b", "type": "html", "visibleIf": "{BMI} >= 18.5 and {BMI} <25", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></br></br>Pana BMI <b>{BMI}</b></br> Prawidłowa waga dla podanego wzrostu jest większa od {WagaMin} kg oraz mniejsza od {WagaMax} kg.</br></br>Ma Pan nadwagę.</div>", "name": "response22c", "type": "html", "visibleIf": "{BMI} >= 25 and {BMI} <30", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></br></br>Prosimy o precyzyjne sprawdzenie wpisywanych wartości wagi i wzrostu.</div>", "name": "response22e", "type": "html", "visibleIf": "{BMI} >= 50 or {BMI} <=15", "zalecenie": true}, {"html": "<div>Zapraszamy do skorzystania z porad dietetycznych zamieszczonych na stronie NFZ: <a href=\\"https://diety.nfz.gov.pl/local/diet/login.php\\" target=\\"_blank\\">https://diety.nfz.gov.pl</a></br></br>Pana BMI <b>{BMI}</b></br> Prawidłowa waga dla podanego wzrostu jest większa od {WagaMin} kg oraz mniejsza od {WagaMax} kg.</br></br>Pana masa ciała budzi duży niepokój. Powinien Pan skorzystać z porady lekarza POZ.</div>", "name": "response22d", "type": "html", "visibleIf": "{BMI} >= 30 and {BMI} < 50", "zalecenie": true}], "zalecenia": true}, {"name": "panel5PrawaStrona", "type": "panel", "elements": [{"name": "panel2", "type": "panel", "elements": [{"name": "question18", "type": "radiogroup", "title": "Ile porcji warzyw, nie uwzględniając ziemniaków, zjada Pan w ciągu przeciętnego dnia? (jedna porcja warzyw w przybliżeniu jest równa jednej garści lub 3 łyżkom warzyw lub sałatki z warzyw)", "choices": [{"text": "Nie jadam codziennie warzyw", "value": "item1"}, {"text": "1 porcję", "value": "item2"}, {"text": "2-4 porcji", "value": "item3"}, {"text": "5 porcji i więcej", "value": "item4"}]}, {"name": "question19", "type": "radiogroup", "title": "Ile porcji owoców zjada Pan w ciągu przeciętnego dnia? (jedna porcja równa jest w przybliżeniu 1 sztuce średniej wielkości owocu np. 1 jabłko lub dwóm sztukom mniejszych owoców np. 2 sztuki moreli, kiwi)", "choices": [{"text": "Nie jadam codziennie owoców", "value": "item1"}, {"text": "1 porcję", "value": "item2"}, {"text": "2-4 porcji", "value": "item3"}, {"text": "5 porcji i więcej", "value": "item4"}]}, {"name": "question20", "type": "radiogroup", "title": "Jak często w przeciętnym tygodniu zjada Pan dania typu fast-food (np. pizza, hamburgery, hot-dogi, kebab)?", "choices": [{"text": "Nie jadam wcale", "value": "item1"}, {"text": "Raz w tygodniu", "value": "item2"}, {"text": "2-3 razy w tygodniu", "value": "item3"}, {"text": "4 razy w tygodniu i częściej", "value": "item4"}]}, {"name": "question21", "type": "radiogroup", "title": "Jak często w przeciętnym tygodniu pije Pan słodkie napoje niegazowane lub gazowane (typu cola) lub spożywa słodycze?", "choices": [{"text": "Nie pijam/jadam wcale", "value": "item1"}, {"text": "Raz w tygodniu", "value": "item2"}, {"text": "2-3 razy w tygodniu", "value": "item3"}, {"text": " 4 razy w tygodniu i częściej", "value": "item4"}]}, {
  "name": "question22", "type": "panel", "elements": [{"name": "panelWzrostIWaga", "type": "panel", "elements": [
    {
      "name": "ocena",
      "type": "ocena",
      "visible": false,
      "nazwaWyrazenia": "bmi",
      "czyWidocznyTekstWeWskazniku": true,
      "czyDokladnePolozenieWskaznika": true,
      "zakres":{
        "poczatekZakresu":15,
        "koniecZakresu":39.99,
        "przedzialy":[
          {
            "wartoscDo":18.49,
            "etykieta":"niedowaga",
            "kolor":"blue"
           },
           {
           "wartoscDo":24.99,
           "etykieta":"wartość prawidłowa",
           "kolor":"green"
           },
           {
           "wartoscDo":29.99,
           "etykieta":"nadwaga",
           "kolor":"yellow"
           },{
           "wartoscDo":34.99,
           "etykieta":"Otyłość 1",
           "kolor":"orange"
           },{
           "wartoscDo":39.99,
           "etykieta":"Otyłość 2",
           "kolor":"red"
           }]}
  },
    {
    "name": "question22",
    "type": "multipletext", "items": [{"name": "wzrost", "title": "wzrost", "inputMask": "9[9][9]", "validators": [{"text": "Wartość pola wzrost musi być większa lub równa 30 oraz mniejsza lub równa 300 ", "type": "expression", "expression": "({question22.wzrost}  empty) or ({question22.wzrost}>=30 and {question22.wzrost}<=300) and {question22.wzrost} !=0"}], "placeHolder": "cm"}, {"name": "waga", "title": "waga", "inputMask": "9[9][9]", "validators": [{"text": "Wartość pola waga musi być większa lub równa 30 oraz mniejsza lub równa 300 ", "type": "expression", "expression": "({question22.waga} empty) or ({question22.waga}>=30 and {question22.waga}<=300) and {question22.waga} !=0"}], "placeHolder": "kg"}], "title": "Proszę podać swój wzrost i wagę?"}]}]}]}], "startWithNewLine": false}], "description": "Dieta"}], "title": "Ankieta Zdrowego Stylu Życia "}`,
      odpowiedzi: null,
      wypelnijAnkietePonownie: false,
      statusWypelnienia: null
    };
    return of(definicja);
    return this.httpClient.get<AnkietaOutput>(`/ikp/ankiety/${identyfikatorAnkiety}`);
  }

  public zapiszWynikiAnkiety(identyfikatorAnkiety: number, odpowiedziAnkietowanego: string): Observable<string> {
    return this.httpClient.post<string>(`/ikp/ankiety/${identyfikatorAnkiety}/zapisz-czesciowo`, odpowiedziAnkietowanego);
  }

  public zatwierdzSkierowanie(identyfikatorAnkiety: number, odpowiedziAnkietowanego: string): Observable<string> {
    return this.httpClient.post<string>(`/ikp/ankiety/${identyfikatorAnkiety}/zapisz`, odpowiedziAnkietowanego);
  }

  public wydrukPodsumowaniaAnkiety(odpowiedziAnkietowanego: string) {
    const httpOptions = {
      responseType: 'blob' as 'json'
    };
    return this.httpClient.post<Blob>(`/ikp/ankiety/wydruk-podsumowania`, odpowiedziAnkietowanego, httpOptions);
  }
}
