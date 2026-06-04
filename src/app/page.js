import Image from "next/image";
import styles from "./page.module.css";
import {Typography} from "@mui/material";
import Component1 from "@/app/components/useContextExample/component1";
import Component2 from "@/app/components/useContextExample/component2";
import Component3 from "@/app/components/useContextExample/component3";
import MainuseMemoHook from "@/app/components/useMemoHookExample/mainuseMemoHook";

export default function Home() {
  return (
   <>
       {/*<Component1/>*/}
<MainuseMemoHook/>
   </>
  );
}
