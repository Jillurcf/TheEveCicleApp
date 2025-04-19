import {
  Alert,
  FlatList,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import tw from '../../../lib/tailwind';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Share from 'react-native-share';
import RNFS from 'react-native-fs';
import Clipboard from '@react-native-clipboard/clipboard';

type Props = {};

const data = [
  { id: '1', plan: 'Annually', date: '23 Jan, 23', amount: '£29.99', status: 'PAID' },
  { id: '2', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
  { id: '3', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
  { id: '4', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
  { id: '5', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'PAID' },
  { id: '6', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'CANCELED' },
  { id: '7', plan: 'Monthly', date: '23 Jan, 23', amount: '£2.99', status: 'CANCELED' },
];

const StatusBadge = ({ status }: { status: string }) => {
  const isPaid = status === 'PAID';
  return (
    <View style={tw`px-2 py-1 rounded-full ${isPaid ? 'bg-green-100' : 'bg-red-100'}`}>
      <Text style={tw`text-xs font-bold ${isPaid ? 'text-green-700' : 'text-red-700'}`}>
        {status}
      </Text>
    </View>
  );
};

const InvoiceContent = (props: Props) => {
  const [pdfFilePath, setPdfFilePath] = useState<string | null>(null);

  const downloadPDF = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download the PDF',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert('Permission Denied', 'Read permission not granted');
          return;
        }
      }

      const pdfContent = `
        <h1 style="text-align:center; font-size: 24px;">Invoice Summary</h1>
        <table style="width:100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 10px; border: 1px solid #ccc;">Invoice ID</th>
              <th style="padding: 10px; border: 1px solid #ccc;">Billing Date</th>
              <th style="padding: 10px; border: 1px solid #ccc;">Plan</th>
              <th style="padding: 10px; border: 1px solid #ccc;">Amount</th>
              <th style="padding: 10px; border: 1px solid #ccc;">Status</th>
            </tr>
          </thead>
          <tbody>
            ${data
              .map(
                (item) => `
                  <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;">${item.id}</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">${item.date}</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">${item.plan}</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">${item.amount}</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">${item.status}</td>
                  </tr>`
              )
              .join('')}
          </tbody>
        </table>
      `;

      const fileName = `invoice_${Date.now()}.pdf`;

      const options = {
        html: pdfContent,
        fileName: fileName.replace('.pdf', ''),
        directory: 'Documents',
        base64: true,
      };

      const file = await RNHTMLtoPDF.convert(options);

      setPdfFilePath(file.filePath ?? null);

      await Share.open({
        url: `file://${file.filePath}`,
        type: 'application/pdf',
        title: 'Share Invoice PDF',
      });

      Alert.alert('Success', `PDF generated at:\n${file.filePath}`);
    } catch (err) {
      console.error('PDF download error:', err);
      Alert.alert('Error', 'Failed to generate or share PDF');
    }
  };

  const copyPDFToClipboard = async () => {
    if (!pdfFilePath) {
      Alert.alert('No PDF found', 'Please generate a PDF first');
      return;
    }

    try {
      const base64 = await RNFS.readFile(pdfFilePath, 'base64');
      Clipboard.setString(base64);
      Alert.alert('Copied', 'PDF content copied to clipboard as base64');
    } catch (error) {
      console.error('Copy error:', error);
      Alert.alert('Error', 'Failed to copy PDF to clipboard');
    }
  };

  return (
    <View>
      <View style={tw`flex-row justify-between mb-2`}>
        <Text style={tw`text-gray-500 text-xs`}>Invoice ID</Text>
        <Text style={tw`text-gray-500 text-xs`}>Billing Date</Text>
        <Text style={tw`text-gray-500 text-xs`}>Plan</Text>
        <Text style={tw`text-gray-500 text-xs`}>Amount</Text>
        <Text style={tw`text-gray-500 text-xs`}>Status</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`flex-row justify-between items-center py-2 border-b border-gray-200`}>
            <Text style={tw`text-xs text-gray-700`}>{item.id}</Text>
            <Text style={tw`text-xs text-gray-700`}>{item.date}</Text>
            <Text style={tw`text-xs text-gray-700`}>{item.plan}</Text>
            <Text style={tw`text-xs text-gray-700`}>{item.amount}</Text>
            <StatusBadge status={item.status} />
          </View>
        )}
      />

      <TouchableOpacity
        style={tw`bg-[#4FA8A8] py-3 rounded-full mt-6 items-center`}
        onPress={downloadPDF}
      >
        <Text style={tw`text-white font-bold`}>Download PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`bg-gray-700 py-3 rounded-full mt-4 items-center`}
        onPress={copyPDFToClipboard}
      >
        <Text style={tw`text-white font-bold`}>Copy PDF to Clipboard</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InvoiceContent;

const styles = StyleSheet.create({});
