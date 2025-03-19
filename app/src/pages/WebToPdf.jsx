import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import Times from '../components/times.ttf';
import Timesbd from '../components/timesbd.ttf';
import Timesi from '../components/timesi.ttf';
import Timesbi from '../components/timesbi.ttf';

Font.register({
    family: 'Times',
    src: Times,
    format: 'truetype'
});
Font.register({
    family: 'TimesBold',
    src: Timesbd,
    format: 'truetype'
});
Font.register({
    family: 'TimesItalic',
    src: Timesi,
    format: 'truetype'
});
Font.register({
    family: 'TimesBoldItalic',
    src: Timesbi,
    format: 'truetype'
});

const styles = StyleSheet.create({
    page: {
        fontFamily: 'Times',
        fontSize: 12,
        padding: 40,
        lineHeight: 1.5,
        textAlign: 'justify',
    },
    title: {
        fontFamily: 'TimesBold',
        fontSize: 12,
        textAlign: 'center',
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
            <Text style={{ textAlign: 'center' }}>la unitatea de curs</Text>
            <Text style={{ ...styles.title, fontSize: 18 }}>{data.unitateCurs}</Text>
            <View style={{ marginVertical: 6 }} />
            <Text style={{ textAlign: 'center' }}>
                pentru studenții de la specialitatea <Text>{data.specialitate}</Text>
            </Text>
            <Text style={{ textAlign: 'center' }}>
                Ciclul <Text>{data.ciclu}</Text>, studii <Text>{data.studii}</Text>, învățământ <Text>{data.invatamant}</Text>
            </Text>
            <View style={{ marginVertical: 30 }} />
            <View style={{ alignSelf: 'flex-end' }}>
                <Text style={{ fontFamily: 'TimesBold' }}>Autori:</Text>
                <View style={{ marginVertical: 22 }} />
                <Text>{data.autor1}</Text>
                <Text>{data.autor2}</Text>
            </View>
            <View style={{ marginVertical: 80 }} />
            <Text style={styles.title}>{data.locSiAn}</Text>
        </Page>
    </Document>
);

export default PdfDocument;
