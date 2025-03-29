import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import Times from "../fonts/times.ttf";
import Timesbd from "../fonts/timesbd.ttf";
import Timesi from "../fonts/timesi.ttf";
import Timesbi from "../fonts/timesbi.ttf";
import teacherImage from "./teacherImage.png"; // Importă imaginea profesorului

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
  editableText: {
    fontFamily: "TimesItalic",
  },
  table: {
    display: "table",
    width: "auto",
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 4,
    fontSize: 10,
  },
  imageContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  content: {
    flex: 1,
  },
});

const PdfDocument = ({ data: DocsInfo }) => (
  <Document language="ro">
    <Page style={styles.page} size="A4">
      <View style={styles.title}>
        <View style={{ marginVertical: 16 }} />
        <Text>MINISTERUL EDUCAȚIEI ȘI CERCETĂRII AL REPUBLICII MOLDOVA</Text>
        <Text>UNIVERSITATEA DE STAT „ALECU RUSSO” DIN BĂLȚI</Text>
        <Text>{DocsInfo.facultate}</Text>
        <Text>{DocsInfo.catedra}</Text>
      </View>
      <View style={{ marginVertical: 105 }} />
      <Text style={{ ...styles.title, fontSize: 16 }}>Curriculum</Text>
      <View style={{ marginVertical: 4 }} />
      <Text style={{ textAlign: "center" }}>la unitatea de curs</Text>
      <Text style={{ ...styles.title, fontSize: 18 }}>
        {DocsInfo.unitateCurs}
      </Text>
      <View style={{ marginVertical: 6 }} />
      <Text style={{ textAlign: "center" }}>
        pentru studenții de la specialitatea{" "}
        <Text>{DocsInfo.specialitate}</Text>
      </Text>
      <Text style={{ textAlign: "center" }}>
        Ciclul <Text>{DocsInfo.ciclu}</Text>, studii{" "}
        <Text>{DocsInfo.studii}</Text>, învățământ{" "}
        <Text>{DocsInfo.invatamant}</Text>
      </Text>
      <View style={{ marginVertical: 30 }} />
      <View style={{ alignSelf: "flex-end" }}>
        <Text style={{ fontFamily: "TimesBold" }}>Autori:</Text>
        <View style={{ marginVertical: 22 }} />
        <Text>{DocsInfo.autor1}</Text>
        <Text>{DocsInfo.autor2}</Text>
      </View>
      <View style={{ marginVertical: 80 }} />
      <Text style={styles.title}>{DocsInfo.locSiAn}</Text>
    </Page>
    <Page style={styles.page} size="A4">
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Discutat şi aprobat în şedinţa Catedrei de matematică şi informatică
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {DocsInfo.procesNumber} din {DocsInfo.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Șeful Catedrei de matematică şi informatică ______________{" "}
        {DocsInfo.assistUniv} {DocsInfo.nameTeacher}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Analizat și recomandat în ședința Comisiei metodice a{" "}
        {DocsInfo.nameFaculty}
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {DocsInfo.procesNumber} din {DocsInfo.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Președintele Comisiei metodice a Consiliului {DocsInfo.nameFaculty}{" "}
        ______________ {DocsInfo.nameTeacher}
      </Text>
      <View style={{ marginVertical: 20 }} />
      <Text style={{ textAlign: "center" }}>
        Discutat şi aprobat în şedinţa Consiliului {DocsInfo.nameFaculty}
      </Text>
      <Text style={{ textAlign: "center" }}>
        Procesul-verbal {DocsInfo.procesNumber} din {DocsInfo.procesDate}
      </Text>
      <View style={{ marginVertical: 10 }} />
      <Text style={{ textAlign: "center" }}>
        Decanul {DocsInfo.nameFaculty} ______________ {DocsInfo.nameDecan}
      </Text>
    </Page>
    <Page style={styles.page}>
      <Text style={styles.title}>
        Informaţii de identificare a unității de curs
      </Text>
      <Text style={styles.title}>
        Facultatea:{" "}
        <Text style={styles.editableText}>{DocsInfo.facultySmall}</Text>
      </Text>
      <Text style={styles.title}>
        Catedra: <Text style={styles.editableText}>{DocsInfo.department}</Text>
      </Text>
      <Text style={styles.title}>
        Codul și denumirea domeniului general de studiu:{" "}
        <Text style={styles.editableText}>{DocsInfo.nameCourse}</Text>
      </Text>
      <Text style={styles.title}>
        Codul și denumirea domeniului de formare profesională:{" "}
        <Text style={styles.editableText}>{DocsInfo.nameTraining}</Text>
      </Text>
      <Text style={styles.title}>
        Codul și denumirea specialității:{" "}
        <Text style={styles.editableText}>{DocsInfo.specialitate}</Text>
      </Text>

      <Text style={styles.title}>Administrarea unității de curs</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>Codul unității de curs</Text>
          <Text style={styles.tableCell}>Nr. de credite ECTS</Text>
          <Text style={styles.tableCell}>Total ore</Text>
          <Text style={styles.tableCell}>Curs</Text>
          <Text style={styles.tableCell}>Seminar</Text>
          <Text style={styles.tableCell}>Laborator</Text>
          <Text style={styles.tableCell}>Lucrul individual al studentului</Text>
          <Text style={styles.tableCell}>Forma de evaluare</Text>
          <Text style={styles.tableCell}>Limba de instruire</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableCell}>{DocsInfo.tableOne}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableTwo}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableThree}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableFour}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableFive}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableSix}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableSeven}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableEight}</Text>
          <Text style={styles.tableCell}>{DocsInfo.tableNine}</Text>
        </View>
      </View>

      <Text style={styles.title}>
        Anul de studiu și semestrul în care se studiază:{" "}
        <Text style={styles.editableText}>{DocsInfo.halfYear}</Text>
      </Text>
      <Text style={styles.title}>
        Forma de organizare a învățământului:{" "}
        <Text style={styles.editableText}>{DocsInfo.studyMode}</Text>
      </Text>
      <Text style={styles.title}>
        Regimul unității de curs:{" "}
        <Text style={styles.editableText}>{DocsInfo.typeCourse}</Text>
      </Text>
      <Text style={styles.title}>
        Categoria formativă:{" "}
        <Text style={styles.editableText}>{DocsInfo.categoryFormat}</Text>
      </Text>

      <Text style={styles.title}>
        Informaţii referitoare la cadrele didactice
      </Text>
      <View style={styles.imageContainer}>
        <Image style={styles.image} src={teacherImage} alt="Teacher Image" />
        <View style={styles.content}>
          <Text style={styles.title}>{DocsInfo.infoSectionTeacher}</Text>
          <Text>
            Domeniul de interes științific:{" "}
            <Text style={styles.editableText}>{DocsInfo.sienceType}</Text>
          </Text>
          <Text>
            Biroul:{" "}
            <Text style={styles.editableText}>{DocsInfo.officceTeacher}</Text>
          </Text>
          <Text>
            Telefon:{" "}
            <Text style={styles.editableText}>{DocsInfo.phoneTeacher}</Text>
          </Text>
          <Text>
            E-mail:{" "}
            <Text style={styles.editableText}>{DocsInfo.emailTeacher}</Text>
          </Text>
          <Text>
            Orele de consultaţii:{" "}
            <Text style={styles.editableText}>
              {DocsInfo.consultationHours}
            </Text>
          </Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfDocument;
