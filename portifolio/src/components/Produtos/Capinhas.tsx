import ProductPageLayout from "./ProductPageLayout"
import CapinhasImg from "../../images/Capinhas.png"
import CapaCouroImg from "../../images/CapaCouro.png"
import CapaMagImg from "../../images/CapaMagnetica.png"
import CapaSpaceImg from "../../images/CapaSpace.png"
import CapaBlisterImg from "../../images/capaBlister.png"

const items = [
  {
  id: "cap-01",
  name: "Capa de Celular Transparente",
  model: "iPhone • Silicone flexível • Antirrisco • Proteção básica",
  image: CapinhasImg,
  price: 30,
  promoPrice: 12,
},

{
  id: "cap-03",
  name: "Capa de Celular Magnética",
  model: "iPhone • Suporte MagSafe • Encaixe magnético • Proteção premium",
  image: CapaMagImg,
  price: 25,
},

{
  id: "cap-04",
  name: "Capa de Celular Couro",
  model: "iPhone • Couro sintético • Design elegante • Toque macio",
  image: CapaCouroImg,
  price: 20,
},

{
  id: "cap-05",
  name: "Capa de Celular Space",
  model: "iPhone • Estilo espacial • Acabamento fosco • Proteção traseira",
  image: CapaSpaceImg,
  price: 25,
},

{
  id: "cap-06",
  name: "Capa de Celular Blister",
  model: "iPhone • Transparente rígida • Bordas reforçadas • Antimpacto",
  image: CapaBlisterImg,
  price: 25,
},
]

const Capinhas = () => {
  return <ProductPageLayout title="Capinhas" emoji="📱" items={items} />
}

export default Capinhas
