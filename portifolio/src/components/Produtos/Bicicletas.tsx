import ProductPageLayout from "./ProductPageLayout"
import BicicletaImg from "../../images/Bicicletas.png"
import ScooterImg from "../../images/SCOOTERMODELOST746.png"
import CadeadoImg from "../../images/CADEADODEBICICLETA.png"
import SuporteImg from "../../images/BICICLETASLE050ITBLUE.png"

const items = [

  { id: "5782", name: "Bicicleta Elétrica Scooter", model: "V10 MAX MARRON", image: BicicletaImg, price: 6600 },
  { id: "5949", name: "Bicicleta Elétrica", model: "SCOOTER ST-746", image: ScooterImg, price: 4500 },
  { id: "5783", name: "Suporte para Bicicleta", model: "ST-746", image: SuporteImg, price: 150 },
  { id: "5950", name: "Cadeado para Bicicleta", model: "V10 MAX MARRON", image: CadeadoImg, price: 50 },

];

const Bicicletas = () => {
  return <ProductPageLayout title="Bicicletas Motorizadas" emoji="🚲" items={items} />
}

export default Bicicletas
