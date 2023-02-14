import React from "react";
import indianDesserts, {
  broastBeverageOnes,
  broastBeverageTwos, captainsDineSpecials, indianAppetizers, indianBiriyanis, indianBroastChickens,
  indianBurgers, indianCurryBeefs, indianCurryDals, indianCurryMuttons, indianCurryPomfrets, indianCurryPrawns, indianCurrys, indianCurryVegetables,
  indianDosas,
  indianFuchkas, indianKebabs, indianNaans, indianPaneers, indianPapadams, indianPizzas, indianPulaos, indianSalads,
  indianSeafoods, setMenus,
  specialMenus, thaiAppetizers, thaiBeefs, thaiChickens,
  thaiCrabs, thaiKingPrawns, thaiNoodles, thaiPrawns, thaiRices, thaiSalads, thaiSoups, thaiVegetables
} from "../../Assets/Menu-Data/menuX";
import BeverageOne from "../../Components/Menu_Card/BeverageOne/BeverageOne";
import BeverageTwo from "../../Components/Menu_Card/BeverageTwo/BeverageTwo";
import BroastChicken from "../../Components/Menu_Card/BroastChicken/BroastChicken";
import CaptainSpecial from "../../Components/Menu_Card/CaptainSpecial/CaptainSpecial";
import IndianPaneer from "../../Components/Menu_Card/IndianAppePapadamPaneer/IndianAppePapadamPaneer";
import IndianBiriyani from "../../Components/Menu_Card/IndianBiriyaniPulao/IndianBiriyaniPulao";
import IndianBurger from "../../Components/Menu_Card/IndianBurger/IndianBurger";
import IndianCurry from "../../Components/Menu_Card/IndianCurry/IndianCurry";
import IndianCurryDal from "../../Components/Menu_Card/IndianCurryDal/IndianCurryDal";
import IndianCurryMutton from "../../Components/Menu_Card/IndianCurryMutton/IndianCurryMutton";
import IndianCurryPrawn from "../../Components/Menu_Card/IndianCurryPrawn/IndianCurryPrawn";
import IndianDessert from "../../Components/Menu_Card/IndianDessertCard/IndianDessert";
import IndianDosa from "../../Components/Menu_Card/IndianDosa/IndianDosa";
import IndianKebab from "../../Components/Menu_Card/IndianKebab/IndianKebab";
import IndianNaan from "../../Components/Menu_Card/IndianNaan/IndianNaan";
import IndianPizza from "../../Components/Menu_Card/IndianPizza/IndianPizza";
import IndianSalad from "../../Components/Menu_Card/IndianSaladSeaFood/IndianSaladSeaFood";
import SetMenuOne from "../../Components/Menu_Card/SetMenuOne/SetMenuOne";
import SpecialMenu from "../../Components/Menu_Card/SpecialMenu/SpecialMenu";
import ThaiAppetizers from "../../Components/Menu_Card/ThaiAppetizers/ThaiAppetizers";
import ThaiBeef from "../../Components/Menu_Card/ThaiBeef&Prawn/ThaiBeef&Prawn";
import ThaiChicken from "../../Components/Menu_Card/ThaiChicken/ThaiChicken";
import ThaiCrabVegetable from "../../Components/Menu_Card/ThaiCrab&Vegetable/ThaiCrabVegetable";
import ThaiKingPrawn from "../../Components/Menu_Card/ThaiKingPrawn/ThaiKingPrawn";
import ThaiNoodles from "../../Components/Menu_Card/ThaiNoodle&Rice/ThaiNoodle";
import ThaiSalad from "../../Components/Menu_Card/ThaiSalad/ThaiSalad";
import ThaiSoup from "../../Components/Menu_Card/ThaiSoup/ThaiSoup";
import SetMenuOneCard from "../../Components/SetMenus/SetMenuOneCard";
import SetMenuTwo from "../../Components/SetMenus/SetMenuTwoCard";
import TimeTableCard from "../../Components/SetMenus/TimeTableCard";
import "./menu.css";

const Menu = () => {
  return (
    <>
    <div>
      <p id="title">Menu</p>
      <div className="container">
        <div className="left">
          <ThaiAppetizers
            title={thaiAppetizers[0].cuisin}
            item={thaiAppetizers[0].category}
          />
        </div>
        <div className="right">
          <ThaiSalad
            title={thaiSalads[0].cuisin}
            item={thaiSalads[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <ThaiSoup title={thaiSoups[0].cuisin} item={thaiSoups[0].category} />
        </div>
        <div className="right">
          <ThaiNoodles
            title={thaiNoodles[0].cuisin}
            item={thaiNoodles[0].category}
            newItem={thaiRices[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <ThaiBeef
            title={thaiBeefs[0].cuisin}
            item={thaiBeefs[0].category}
            newItem={thaiPrawns[0].category}
          />
        </div>
        <div className="right">
          <ThaiKingPrawn
            title={thaiKingPrawns[0].cuisin}
            item={thaiKingPrawns[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <ThaiChicken
            title={thaiChickens[0].cuisin}
            item={thaiChickens[0].category}
          />
        </div>
        <div className="right">
          <ThaiCrabVegetable
            title={thaiCrabs[0].cuisin}
            item={thaiCrabs[0].category}
            newItem={thaiVegetables[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <IndianPaneer
            title={indianAppetizers[0].cuisin}
            item={indianAppetizers[0].category}
            newItem={indianPapadams[0].category}
            anItem={indianPaneers[0].category}
          />
        </div>
        <div className="right">
          <IndianSalad
            title={indianSalads[0].cuisin}
            item={indianSalads[0].category}
            newItem={indianSeafoods[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <IndianBiriyani
            title={indianBiriyanis[0].cuisin}
            item={indianBiriyanis[0].category}
            newItem={indianPulaos[0].category}
          />
        </div>
        <div className="right">
          <IndianCurry
            title={indianCurrys[0].cuisin}
            item={indianCurrys[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <IndianCurryMutton
            title={indianCurryMuttons[0].cuisin}
            item={indianCurryMuttons[0].category}
            newItem={indianCurryBeefs[0].category}
          />
        </div>
        <div className="right">
          <IndianCurryPrawn
            title={indianCurryPrawns[0].cuisin}
            item={indianCurryPrawns[0].category}
            newItem={indianCurryPomfrets[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <IndianCurryDal
            title={indianCurryDals[0].cuisin}
            item={indianCurryDals[0].category}
            newItem={indianCurryVegetables[0].category}
          />
        </div>
        <div className="right">
          <IndianDosa
            title={indianDosas[0].cuisin}
            item={indianDosas[0].category}
            newItem={indianCurryVegetables[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <IndianNaan
            title={indianNaans[0].cuisin}
            item={indianNaans[0].category}
          />
        </div>
        <div className="right">
          <IndianKebab
            title={indianKebabs[0].cuisin}
            item={indianKebabs[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <CaptainSpecial
            title={captainsDineSpecials[0].cuisin}
            item={captainsDineSpecials[0].category}
          />
        </div>
        <div className="right">
          <IndianPizza
            title={indianPizzas[0].cuisin}
            item={indianPizzas[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <BroastChicken
            title={indianBroastChickens[0].cuisin}
            item={indianBroastChickens[0].category}
          />
        </div>
        <div className="right">
          <IndianBurger
            title={indianBurgers[0].cuisin}
            item={indianBurgers[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <BeverageOne
            title={broastBeverageOnes[0].cuisin}
            item={broastBeverageOnes[0].category}
          />
        </div>
        <div className="right">
          <BeverageTwo
            title={broastBeverageTwos[0].cuisin}
            item={broastBeverageTwos[0].category}
          />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <SetMenuOneCard
            title={setMenus[0].cuisin}
            item={setMenus[0].category}
          />
        </div>
        <div className="right">
          <SetMenuTwo title={setMenus[0].cuisin} item={setMenus[0].category} />
        </div>
      </div>
      <div className="container">
        <div className="left">
          <SpecialMenu
            title={specialMenus[0].cuisin}
            item={specialMenus[0].category}
          />
        </div>
        <div className="right">
          <IndianDessert
            title={indianDesserts[0].cuisin}
            item={indianDesserts[0].category}
          />
        </div>
      </div>
    </div>
    <div className="container center">
        <div className="left">
          <TimeTableCard />
        </div>
      </div>
    </>
  );
};

export default Menu;
