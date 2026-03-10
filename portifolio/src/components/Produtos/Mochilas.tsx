import ProductPageLayout from "./ProductPageLayout"
import EstampaFemImg from "../../images/MochilaEstampaFem.png"
import InfantilImg from "../../images/MochilaInfantil.png"
import FemPromoImg from "../../images/MochilaFemPromo.png"
import PeluciaImg from "../../images/MochilaPelucia.png"

const items = [
  {
    id: "moch-01",
    name: "Mochila de Pelúcia Infantil",
    model: "Infantil • Pelúcia macia • Leve e confortável",
    image: PeluciaImg,
    price: 70,
  },
  {
    id: "moch-02",
    name: "Mochila Estampada Feminina",
    model: "Feminina • Estampa moderna • Uso diário",
    image: EstampaFemImg,
    price: 120,
  },
  {
    id: "moch-03",
    name: "Mochila Feminina",
    model: "Modelo 99 • Espaçosa • Alças reforçadas",
    image: FemPromoImg,
    price: 99,
  },
  {
    id: "moch-04",
    name: "Mochila Infantil",
    model: "Infantil • Leve • Ideal para escola",
    image: InfantilImg,
    price: 50,
  },
]

const Mochilas = () => {
  return <ProductPageLayout title="Mochilas" emoji="🎒" items={items} />
}

export default Mochilas
