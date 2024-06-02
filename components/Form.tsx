import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Form() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('developer'); // Default role for demonstration purposes
  const [countryCode, setCountryCode] = useState('+91');
  const [goal, setGoal] = useState('learn');

  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Name: ${name}, Country Code: ${countryCode}, Role: ${role}, Goal: ${goal}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Fill the below form for Enquire</Text>
      </View>
      
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      <Text style={styles.label}>*Enter The WhatsApp Number</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={countryCode}
          style={styles.picker}
          onValueChange={(itemValue) => setCountryCode(itemValue)}
        >
          <Picker.Item label="India (+91)" value="+91" />
          <Picker.Item label="Azerbaijan (+994)" value="+994" />
          <Picker.Item label="United States (+1)" value="+1" />
          <Picker.Item label="United Kingdom (+44)" value="+44" />
          <Picker.Item label="Canada (+1)" value="+1" />
          <Picker.Item label="Australia (+61)" value="+61" />
        </Picker>
      </View>

      <Text style={styles.label}>*Select your Profession</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(itemValue) => setRole(itemValue)}
        >
          <Picker.Item label="Select most relevant option" value="" />
          <Picker.Item label="Developer" value="developer" />
          <Picker.Item label="Designer" value="designer" />
          <Picker.Item label="Manager" value="manager" />
          <Picker.Item label="Teacher" value="teacher" />
          <Picker.Item label="Doctor" value="doctor" />
          <Picker.Item label="Engineer" value="engineer" />
        </Picker>
      </View>
      
      <Text style={styles.label}>*Select your goal</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={goal}
          style={styles.picker}
          onValueChange={(itemValue) => setGoal(itemValue)}
        >
          <Picker.Item label="Learn" value="learn" />
          <Picker.Item label="Build" value="build" />
          <Picker.Item label="Grow" value="grow" />
          <Picker.Item label="Network" value="network" />
          <Picker.Item label="Lead" value="lead" />
        </Picker>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: 'pink',
    padding: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  label: {
    color: 'black',
    marginBottom: 8,
    fontSize: 18,
  },
  input: {
    backgroundColor: '#f0f0f0',
    color: 'black',
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
  },
  pickerContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 16,
  },
  picker: {
    color: 'black',
  },
  button: {
    backgroundColor: 'pink',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
