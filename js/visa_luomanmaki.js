/*
 * Your name: Alisa Luomanmäki
 * Start date: 28.3.2020
 * End date:
 * 
 */

class Kysymys {
    constructor(kysymys, vastausOikea, vastausVaara, toinenVaara, kuva, selitys) {
        this._kysymys = kysymys;
        this._vastausOikea = vastausOikea;
        this._vastausVaara = vastausVaara;
        this._toinenVaara = toinenVaara;
        this._kuva = kuva;
        this._selitys = selitys;
    }

    get kysymys() {
        return this._kysymys;
    }

    get vastausOikea() {
        return this._vastausOikea;
    }

    get vastausVaara() {
        return this._vastausVaara;
    }

    get toinenVaara() {
        return this._toinenVaara;
    }

    get kuva() {
        return this._kuva;
    }

    get selitys() {
        return this._selitys;
    }
}
// listattu kysymykset

let listaKysymykset = {
    lista: new Array(),

    tallennaTiedot: function (henkiloTiedot) {
        this.lista.push(henkiloTiedot);
    }
};

// Tässä on kysymysten lukeminen käyttöön

function startData() {

    let tieto = new Kysymys(
            "Kuka keräsi runot Kalevalaan?",
            "Elias Lönnrot",
            "Taisto Hanhi",
            "Aleksis Kivi",
            '<img src="img/elias.png" class="img-fluid" alt=""/>',
            "Lönnrot(s.1802-k.1884) kiersi Itä-Suomessa keräten runoja ja loitsuja. Hän uskoi, että runojen\n\
             tapahtumat ja henkilöt olivat todellisia historian tapahtumia. \n\
             Runoja ja riimejä muokaten hän koosti yhtenäisen runo-kokoelman.\n\
             Kalevala julkaistiin 1849.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Minkä niminen oli Pohjolan emäntä?",
            "Louhi",
            "Käärme",
            "Lohkare",
            '<img src="img/louhi.png" class="img-fluid" alt=""/>',
            "Louhi on pohjalaisten johtaja ja kalevalaisten vihollinen.\n\
            Pohjolan emäntää sanotaan noidaksi, tautien, vaivojen ja ongelmien luojaksi.\n\
            Hänellä on kauniita tyttäriä, joita kalevalaiset käyvät kosimassa.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Mitä Väinämöinen tekee hauen leukaluusta?",
            "Kanteleen",
            "Jousipyssyn",
            "Oven",
            '<img src="img/hauki.png" class="img-fluid" alt=""/>',
            "Sampoa ryöstämään mennessään kalevalaisten vene joutui hauen niskaan.\n\
             Surmattuaan ja syötyään kalan Väinämöinen keksi valmistaa siitä ensimmäisen kanteleen.\n\
             Soitto on niin kaunista että koko maailma pysähtyi sitä kuuntelemaan.\n\
            ");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Sampo ryöstetään Kalevassa. Miten sille käy?",
            "Sampo tuhoutuu ja putoaa mereen",
            "Sampo tuottaa rikkauksia Väinämöiselle",
            "Pohjalaiset saavat Sammon takaisin",
            '<img src="img/sampo.png" class="img-fluid" alt=""/>',
            "Kalevalaiset vievät veneellä sammon. Louhi muuttuu kokko-linnuksi \n\
            ja hyökkää kalevalaisten kimppuun. Sampo tuhoutuu pieniksi sirpaleiksi.\n\
            Louhi saa sammon kannen ja sirpaleet rikastuttavat kalevalaisten maaperän.\n\
             ");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Kuka takoi Sammon?",
            "Ilmarinen",
            "Väinämöinen",
            "Kullervo",
            '<img src="img/seppa.png" class="img-fluid" alt=""/>',
            "Louhi lupasi tyttärensä seppä Ilmariselle, jos tämä takoo sammon.\n\
            Pohjolan emäntä pettää kuitenkin lupauksensa ja lukitsee sammon lukkojen taakse.\n\
             Sampo luo rikkauksia, viljaa ja suolaa omistajalleen.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Lemminkäinen kuolee, mutta mikä herättää hänet henkiin?",
            "Mehiläinen",
            "Muurahainen",
            "Kottarainen",
            '<img src="img/aiti.png" class="img-fluid" alt=""/>',
            "Lemminkäinen surmaa Pohjolan isännän ja pakenee. Eräs pohjalainen\n\
            surmaa ja pilkkoo Lemminkäisen upottaen ruumiin tuonen jokeen.\n\
             Lemminkäisen äiti kerää poikansa palat ja kutsuu mehiläisen tuomaan \n\
            hunajaa, joka palauttaa hengen hänen poikaansa. ");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Kuka on Väinämöisen äiti?",
            "Ilmatar",
            "Kuutar",
            "Vedetär",
            '<img src="img/vainamoinen.png" class="img-fluid" alt=""/>',
            "Ilmatar on taivaallinen neito. Hän tulee raskaaksi tuulesta ja synnyttää Väinämöisen.\n\
             Syntyessään Väinämöinen on jo vanhana mies.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Väinämöinen ja Joukahainen ottavat mittaa toisistaan. Miten?",
            "Kilpalaulaen",
            "Miekoin",
            "Nyrkein",
            '<img src="img/taistelu.png" class="img-fluid" alt=""/>',
            "Joukahainen haastaa Väinämöisen. Hän kumminkin häviää ja Väinämöinen \n\
            loitsii hänet laumalla suohon. Pelastuakseen Joukahainen lupaa siskonsa \n\
            tietäjälle vaimoksi.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Pohjolan emäntä käskee hirviön tappamaan Sammon ryöstäjät. Mikä olento se oli?",
            "Iku-Turso",
            "Ihmissusi",
            "Zombie",
            '<img src="img/hirvio.png" class="img-fluid" alt=""/>',
            "Iku-Turso on vesihirviö. Se pysähtyttää kalevalaisten matkan,\n\
            mutta Väinämöinen ottaa korvasta kiinni otusta. Iki-Turso vannoo \n\
            ettei enää ahdistele ihmisiä.");

    listaKysymykset.tallennaTiedot(tieto);

    tieto = new Kysymys(
            "Aino ei halua Väinämöiselle vaimoksi. Mitä hän tekee?",
            "Hän hukuttautuu ja muuttuu Vellamon neidoksi",
            "Hän peruu koko liiton",
            "Hän suostuu suruissaan Väinämöisen vaimoksi",
            '<img src="img/aino.png" class="img-fluid" alt=""/>',
            "Jouhakainen lupasi siskonsa vaimoksi Väinämöiselle.\n\
            Hän kieltätyy ja hukuttautuu. Väimöinen kieltää ottamasta vanhaa \n\
            puolisoa tai menemästä naimisiin nuorena.");

    listaKysymykset.tallennaTiedot(tieto);


}

// Numeroiden satunaisarpoja

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Sekoittaa numeroita listan pituuden mukaan ja palauttaa sekalaisen numeron
 * Pienin palautettava luku on vain 0 */
function sekoitaNumerot(listanPituus) {
    let pituus = listanPituus - 1;
    if (pituus < 0) {
        return 0;
    }
    return getRndInteger(0, pituus);
}

// Vakiotulosteita

const taysi = "Olet tietäjä Kalevalasta! Vastasit kaikkiin oikein! Onneksi olkoon!";
const puolet = "Muistisi on tasoa seppä! Harjoittele lisää! Muistele mitä opit\n\
viime kierrokselta.";
const petraus = "Olet runonlausuja. Vielä riittää opittavaa. Jos pelaat uudestaan \n\
muista tämän visan vihjeet niin pärjäät paremmin.";

const palkinto = '<p class="offset-2 col-8 voitot_tausta d-flex justify-content-center">\n\
Tietämyksesi ansaitsee palkinnon. Valitse haluamasi taustakuva ja tallenna se omalle koneelle.\n\
 Nämä kuvat katoavat kun poistut sivulta tai aloitat uuden pelin.\n\
 Jos ne katoavat visaile uudestaan ja saat palkkion uudestaan.</p>\n\
<div class="row d-flex justify-content-center align-items-center"><div class="col-12 col-lg-3">\n\
<h3>Kännykän taustakuva</h3>\n\
<img src="img/luomanmaki_img/kalevala_kannytaustakuva.jpg" class="img-fluid img" alt=""/>\n\
</div><div class="col-12 col-lg-6">\n\
<h3>Tietokoneen taustakuva 1920x1080</h3>\n\
<img src="img/luomanmaki_img/kalevala_taustakuva1920_1080.jpg" class="img-fluid" alt=""/>\n\
</div></div>';

$(document).ready(function () {


    // Tämä määrittelee monta kysymystä kysytään. Niitä on nyt 10
    let kysymystenMaara = 8;

    // Monesko kysymys on menossa

    let kysymysNro = 0;

    // Montako oikein

    let oikein = 0;

    // Esillä oleva visakysymys
    let visa = "";

    // Sekoitetut vastaukset

    let vastauksia = [];

    // Sekoitetut kysymykset

    let kysymyksetSekaisin = [];


    // Estetään painikkeiden painaminen kun vastaus on jo valittu

    let suljeValinta = 1;

    // Vastaus on oikein. Toimii on/off painikkeena

    let vastaus = 0;

    // Pelin lopetus määrittelyt

    function mitenMeni() {
        if (oikein === kysymystenMaara) {
            $("#visaPaattyy").html('<h5>' + taysi + '</h5>');
            $("#palkinto").html(palkinto);
            $("#palkinto").show();
        } else if (oikein >= (kysymysNro / 2)) {
            $("#visaPaattyy").html('<h5>' + puolet + '</h5>');
        } else {
            $("#visaPaattyy").html('<h5>' + petraus + '</h5>');
        }
        $("#visaPaattyy").show();
    }

    // Arpoo vastaukset sekaisin

    function arvoVisa() {
        $("#otsikko").html(kysymysNro + ". " + visa.kysymys);
        vastauksia = [];
        vastauksia.push(visa.vastausOikea);
        vastauksia.push(visa.vastausVaara);
        vastauksia.push(visa.toinenVaara);

        $("#visakuva").html(visa.kuva);
        let ruudut = $("#vastaukset").children();
        $(ruudut).each(function () {
            let taso = $(this).children(".tuloste");
            let ruutu = $(this).children().attr("id");
            let poista = sekoitaNumerot(vastauksia.length);
            let tulosta = vastauksia[poista];
            if (tulosta === visa.vastausOikea) {
                $("[id=" + ruutu + "]").attr("value", "1");
            }
            $(taso).html(tulosta);
            vastauksia.splice(poista, 1);
        });
    }

    // Arpoo kysymykset sekaisin

    function arvoKysymykset() {
        let listaus = [];
        for (let i = 0; i < kysymystenMaara; i++) {
            listaus.push(i);
        }
        for (let i = 0; !(listaus.length === 0); i++) {
            let siirra = sekoitaNumerot(listaus.length);
            kysymyksetSekaisin.push(listaus[siirra]);
            listaus.splice(siirra, 1);
        }
    }

    // Nollaa kysymys alueen värit ja valuen

    function nollaa(luokka) {
        let tarkista = Number($("[id=" + luokka + "]").val());
        if (tarkista === 1) {
            $("[id=" + luokka + "]").removeAttr("value");
        }
        $("[id=" + luokka + "]").prop('checked', false);
        $("[id=" + luokka + "]").parent().removeClass("oikein");
        $("[id=" + luokka + "]").parent().removeClass("vaara");
        $("[id=" + luokka + "]").parent().removeClass("oikea");
    }

    function nollaaLuokat() {
        nollaa("vastaus1");
        nollaa("vastaus2");
        nollaa("vastaus3");
        $("#info").html("");
        $("#tulokset").html("");
    }

    // visan päättyessä lopetellaan ja piilotellaan asioita

    function visanLopussa() {
        $("#vastaukset").hide();
        $("#seuraava").hide();
        $("#visakuva").html("");
        $("#otsikko").html("");
        $("#voitot2").html(oikein + " / " + kysymystenMaara);
        $("#visakuva").removeClass("tukipuu");
        mitenMeni();
    }

    // luo visan

    function peliAlkaa() {
        $("#palkinto").html("");
        arvoKysymykset();
        visa = listaKysymykset.lista[kysymyksetSekaisin[0]];
        kysymysNro = 1;
        oikein = 0;
        arvoVisa();
        $("#visaPaattyy").html("");
        $("#visaPaattyy").hide();
        $("#vastaukset").show();
        $("#voitot2").html(oikein + " / " + kysymystenMaara);
        $("#peliEteminen").show();
    }

    //painike joka tulee näkyviin kun visa on jo kerran pelattu

    $("#uusiPeli").click(function () {
        $("#uusiPeli").hide();
        $("#voitot").html("");
        $("#tulokset").html("");
        suljeValinta = 1;
        vastaus = 0;

        peliAlkaa();
    });

    // Ensimmäinen painike joka on näkyvissä kun saavutaan sivulle

    $("#aloita").click(function () {
        $(this).remove();
        startData();
        peliAlkaa();
    });

    // Kun näkyviä vastauksia painellaan. Luetaan oliko oikein ja suljetaan vastaaminen

    $(".vastaus").click(function () {
        if (suljeValinta === 1) {
            let arvo = Number($(this).val());
            if (arvo === 1) {
                $(this).parent().addClass("oikein");
                $("#tulokset").html("<h3 style='color: #333300 ;'>Vastasit oikein!</h3>");
                vastaus = 1;
                oikein++;
            } else {
                $(this).parent().addClass("vaara");
                let attributinArvo = $(this).attr("name");
                let valinta = "[name=" + attributinArvo + "][value=1]";
                $(valinta).parent().addClass("oikea");
                $("#tulokset").html("<h3 style='color: #800000 ;'>Väärä vastaus</h3>");
            }
            kysymyksetSekaisin.splice(0, 1);
            $("#seuraava").show();
            $("#seuraava").removeClass("invisible");
        }
        suljeValinta = 0;
        $("#info").html(visa.selitys);
    });

    // tuo esiin seuraavan kysymyksen tai lopettaa pelin

    $("#seuraava").click(function () {
        if (kysymyksetSekaisin.length === 0) {
            if (vastaus === 1) {
                $("#voitot").append('<div class="col-3 col-md-3 col-lg-1 verhov d-flex align-items-center">' + visa.kuva + '</div>');
            } else {
                $("#voitot").append('<div class="col-3 col-md-3 col-lg-1 verhop d-flex align-items-center">' + visa.kuva + '</div>');
            }
            $("#tulokset").html("Visa päättyi!");
            $("#uusiPeli").show();
            $("#seuraava").addClass("invisible");
            nollaaLuokat();
            visanLopussa();
        } else {
            if (vastaus === 1) {
                $("#voitot").append('<div class="col-3 col-md-3 col-lg-1 verhov d-flex align-items-center">'
                        + visa.kuva + '</div>');
                vastaus = 0;
            } else {
                $("#voitot").append('<div class="col-3 col-md-3 col-lg-1 verhop d-flex align-items-center">'
                        + visa.kuva + '</div>');
                vastaus = 0;
            }
            nollaaLuokat();
            let nolla = kysymyksetSekaisin[0];
            visa = listaKysymykset.lista[nolla];
            kysymysNro++;
            $("#voitot2").html(oikein + " / " + kysymystenMaara);
            arvoVisa();
            $("#seuraava").addClass("invisible");
            suljeValinta = 1;
        }

    });

});