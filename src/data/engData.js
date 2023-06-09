import pizza from "../images/pizza.png"
import starwars from "../images/starwars.png"

export const engData = {
    language : "English",
    themeDark : "Gece Modu",
    themeLight: "Aydınlık Modu",
    heroText1: "Frontend Yazılım Geliştirici...",
    heroText2: "Mükemmel kullanıcı deneyimleriyle sağlam ve ölçeklenebilir ön uç ürünleri üretmekten hoşlanırım.",
    skillText: "Yetenekler",
    basicInformation: "Temel Bilgiler",
    projectsTitle : "Projeler",
    projects: [
        {photo : pizza,
        title : "Pizza",
        summary : "Yemek siparişi verebileceğiniz bir site!",
        lib: ["react","redux","vercel"],
        link: [{ url : "fsweb-s7-challenge-pizza-virid.vercel.app", title:"View Site"},
            {url: "http://www.google.com", title:"Github"}]
    },
    {   photo : starwars,
        title : "Star Wars",
        summary : "Tüm StarWars karakterlerinin özelliklerini burda bulabilirsiniz.",
        lib: ["react","redux","vercel"],
        link: [{ url : "https://fs-web-s6-challenge-ochre.vercel.app/", title:"View Site1"},
            {url: "http://www.google.com", title:"Github"}]
            
    }
    ],
    birthDate: "Doğum Tarihi",
    city: "İkamet Şehri",
    education: "Eğitim Durumu",
    preferredRole: "Tercih Ettiği Rol",
    graduation: "Eskişehir Osmangazi Üniversitesi, Makine Mühendisliği, 2019",
    aboutMe: "Hakkımda",
    aboutP1: "Hi, i'm Yasar. I'm living in Izmir. I graduated from Eskisehir Osmangazi University. I worked as mechanical engineer for 2 years. But now i want to be Developer.",
    aboutP2: " So i received the 6-month Full-Stack Web Developer training from Workintech",
    footerMessage: "Send me a message!",
    footerText: "Got a question or proposal, or just want to say hello? Go ahead.",
}