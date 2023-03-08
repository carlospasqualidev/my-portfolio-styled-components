import { motion } from "framer-motion";

import * as s from "./styles";
import Image from "next/image";
import { useTheme } from "styled-components";
import { images } from "../../assets";
import { Typewriter } from "../Typewriter";
import { H6 } from "../Typography";

export const BackgroundCircles = () => {
  const { cl, sz } = useTheme();

  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%",
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0.4, 0.8, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <s.Circle borderColor={cl.gray} borderSize={500}>
        <s.Circle animChangeColors borderColor={cl.white} borderSize={400}>
          <s.Circle borderColor={cl.gray} borderSize={300}>
            <s.Circle borderColor={cl.gray} borderSize={200}>
              <s.Circle borderColor={cl.white} borderSize={100} animPulse />
            </s.Circle>
          </s.Circle>
        </s.Circle>
      </s.Circle>
      <Image
        src={images.Me}
        width={150}
        height={150}
        alt=""
        style={{
          background: "cover",
          borderRadius: "100%",
          position: "absolute",
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 3.5,
          duration: 1.5,
        }}
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25%",
        }}
      >
        <H6
          style={{
            letterSpacing: sz.xsm,
            fontWeight: "bold",
            marginLeft: "8px",
          }}
        >
          Computer Engineer
        </H6>
        <Typewriter
          style={{ fontWeight: "bold" }}
          words={[
            "Olá, Me chamo Carlos Pasquali :)",
            "<>Desenvolvedor Full Stack Junior</>",
            'Console.log("Bem vindo.")',
          ]}
        />
      </motion.div>
    </motion.div>
  );
};

export const MobileBackgroundCircles = () => {
  const { cl } = useTheme();

  return (
    <s.Circle borderColor={cl.gray} borderSize={500}>
      <s.Circle animChangeColors borderColor={cl.gray} borderSize={450}>
        <s.Circle borderColor={cl.gray} borderSize={400}>
          <s.Circle borderColor={cl.gray} borderSize={350}>
            <Image
              src={images.Me}
              width={100}
              height={100}
              alt=""
              style={{
                background: "cover",
                borderRadius: "100%",
              }}
            />
          </s.Circle>
        </s.Circle>
      </s.Circle>
    </s.Circle>
  );
};
