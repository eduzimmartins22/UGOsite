import ProductPageLayout from "./ProductPageLayout"
import PeliculasImg from "../../images/Peliculas.png"
import Peli3dsImg from "../../images/Peli3d.png"
import PeliCamAImg from "../../images/PeliCamAvul.png"
import PeliCamHImg from "../../images/PeliCamHuang.png"
import PeliCamMImg from "../../images/PeliCamMokingo.png"
import PeliFoscaImg from "../../images/peliFosca.png"
import PeliHidroImg from "../../images/PeliHidroG.png"
import PeliPrivImg from "../../images/peliPriv.png"
import PeliTable3Img from "../../images/PeliTablet3d.png"
import PeliTabletClaroImg from "../../images/PeliTabletClaro.png"
import PeliVidroImg from "../../images/PeliVidro.png"
import PeliVidroPrivImg from "../../images/PeliVidroPriv.png"

const items = [
 {
  id: "Peli-1234",
  name: "Película Gel",
  model: "Celulares • Flexível • Autoregenerativa • Alta transparência",
  image: PeliculasImg,
  price: 30,
  promoPrice: 15,
},
{
  id: "peli-4595",
  name: "Película 3D",
  model: "Promoção • Vidro curvo • Cobertura total",
  image: Peli3dsImg,
  price: 15,
  promoPrice: 15,
},
{
  id: "peli-4323",
  name: "Película de Câmera",
  model: "Avulsa • Proteção para lente • Antirrisco",
  image: PeliCamAImg,
  price: 10,
},
{
  id: "peli-5674",
  name: "Película de Câmera",
  model: "Huang • Vidro temperado • Alta resistência",
  image: PeliCamHImg,
  price: 25,
},
{
  id: "peli-5563",
  name: "Película de Câmera",
  model: "Mokingo • Proteção básica • Encaixe preciso",
  image: PeliCamMImg,
  price: 5,
},
{
  id: "peli-5596",
  name: "Película 3D",
  model: "Privacidade • Vidro temperado • Anti-espião",
  image: PeliVidroPrivImg,
  price: 30,
},
{
  id: "peli-4402",
  name: "Película Tablet",
  model: "3D • Vidro temperado • Proteção total",
  image: PeliTable3Img,
  price: 20,
},
{
  id: "peli-4602",
  name: "Película de Vidro",
  model: "3D • Vidro temperado • Alta transparência",
  image: PeliVidroImg,
  price: 20,
},
{
  id: "peli-3450",
  name: "Película",
  model: "Fosca • Anti-reflexo • Toque suave",
  image: PeliFoscaImg,
  price: 35,
},
{
  id: "peli-3449",
  name: "Película Hidrogel",
  model: "Transparente • Flexível • Alta definição",
  image: PeliHidroImg,
  price: 35,
},
{
  id: "peli-4558",
  name: "Película",
  model: "Câmera • Proteção para lente • Antirrisco",
  image: PeliCamAImg,
  price: 20,
},
{
  id: "peli-3451",
  name: "Película Hidrogel",
  model: "Privacidade • Anti-espião • Flexível",
  image: PeliPrivImg,
  price: 50,
},
{
  id: "peli-3751",
  name: "Película Tablet",
  model: "Clara • Alta transparência • Uso diário",
  image: PeliTabletClaroImg,
  price: 52,
},

]

const Peliculas = () => {
  return <ProductPageLayout title="Películas" emoji="📲" items={items} />
}

export default Peliculas
