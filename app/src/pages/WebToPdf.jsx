import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Times from "../fonts/times.ttf";
import Timesbd from "../fonts/timesbd.ttf";
import Timesi from "../fonts/timesi.ttf";
import Timesbi from "../fonts/timesbi.ttf";

Font.register({
  family: "Times",
  src: Times,
  format: "truetype",
});
Font.register({
  family: "TimesBold",
  src: Timesbd,
  format: "truetype",
});
Font.register({
  family: "TimesItalic",
  src: Timesi,
  format: "truetype",
});
Font.register({
  family: "TimesBoldItalic",
  src: Timesbi,
  format: "truetype",
});

const styles = StyleSheet.create({
  page: {
    fontFamily: "Times",
    fontSize: 12,
    padding: 40,
    lineHeight: 1.5,
    textAlign: "justify",
  },
  title: {
    fontFamily: "TimesBold",
    fontSize: 12,
    textAlign: "center",
  },
});

const PdfDocument = ({ data }) => (
  <Document language="ro">
    <Page style={styles.page} size="A4">
      <View style={styles.title}>
        <View style={{ marginVertical: 16 }} />
        <Text>MINISTERUL EDUCAȚIEI ȘI CERCETĂRII AL REPUBLICII MOLDOVA</Text>
        <Text>UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI</Text>
        <Text>{data.facultate}</Text>
        <Text>{data.catedra}</Text>
      </View>
      <View style={{ marginVertical: 105 }} />
      <Text style={{ ...styles.title, fontSize: 16 }}>Curriculum</Text>
      <View style={{ marginVertical: 4 }} />
      <Text style={{ textAlign: "center" }}>la unitatea de curs</Text>
      <Text style={{ ...styles.title, fontSize: 18 }}>{data.unitateCurs}</Text>
      <View style={{ marginVertical: 6 }} />
      <Text style={{ textAlign: "center" }}>
        pentru studenții de la specialitatea <Text>{data.specialitate}</Text>
      </Text>
      <Text style={{ textAlign: "center" }}>
        Ciclul <Text>{data.ciclu}</Text>, studii <Text>{data.studii}</Text>,
        învățământ <Text>{data.invatamant}</Text>
      </Text>
      <View style={{ marginVertical: 30 }} />
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={{ fontFamily: "TimesBold" }}>Autori:</Text>
        <View style={{ marginVertical: 22 }} />
        <Text>{data.autor1}</Text>
        <Text>{data.autor2}</Text>
      </View>
      <View style={{ marginVertical: 80 }} />
      <Text style={styles.title}>{data.locSiAn}</Text>
    </Page>
    <Page style={styles.page} size="A4">
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Discutat şi aprobat în şedinţa Catedrei de matematică şi informatică
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {data.procesNumber} din {data.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Șeful Catedrei de matematică şi informatică ______________{" "}
        {data.assistUniv} {data.nameTeacher}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Analizat și recomandat în ședința Comisiei metodice a {data.nameFaculty}
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {data.procesNumber} din {data.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Președintele Comisiei metodice a Consiliului {data.nameFaculty}{" "}
        ______________ {data.nameTeacher}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Discutat şi aprobat în şedinţa Consiliului {data.nameFaculty}
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {data.procesNumber} din {data.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Decanul {data.nameFaculty} ______________ {data.nameDecan}
      </Text>
    </Page>
  </Document>
);

export default PdfDocument;
