import pizza from "../images/pizza.png"
import starwars from "../images/starwars.png"

export const trData = {
    language : "Türkçe",
    themeDark : "Dark Mode",
    themeLight: "Light Mode",
    heroText1: "I am a Frontend Developer...",
    heroText2: "...who likes to craft solid and scalable frontend products with great user experiences.",
    skillText: "Skills",
    profilesHeader: "Profil",
    basicInformation: "Basic Information",
    projectsTitle : "Projects",
    projects: [
        {photo : pizza,
        title : "Pizza",
        summary : "A web-site where you can order food",
        lib: ["react","redux","vercel"],
        link: [{ url : "http://fsweb-s7-challenge-pizza-virid.vercel.app", title:"View Site"},
            {url: "http://www.google.com", title:"Github"}]
    },
    {   photo : starwars,
        title : "Star Wars",
        summary : "You can find the traits of all StarWars characters at this web-site.",
        lib: ["react","redux","vercel"],
        link: [{ url : "https://fs-web-s6-challenge-ochre.vercel.app/", title:"View Site1"},
            {url: "http://www.google.com", title:"Github"}]
            
    }
    ],

    birthDate: "Date of Birth",
    city: "İkamet Şehri",
    education: "Eğitim Durumu",
    preferredRole: "Tercih Ettiği Rol",
    graduation: "Eskişehir Osmangazi Üniversitesi, Makine Mühendisliği, 2019",
    aboutMe: "About Me",
    aboutP1: "Hi, i'm Yasar. I'm living in Izmir. I graduated from Eskisehir Osmangazi University. I worked as mechanical engineer for 2 years. But now i want to be Developer.",
    aboutP2: " So i received the 6-month Full-Stack Web Developer training from Workintech",
    footerMessage: "Send me a message!",
    footerText: "Got a question or proposal, or just want to say hello? Go ahead.",
    viewSite: "View Site",
}
