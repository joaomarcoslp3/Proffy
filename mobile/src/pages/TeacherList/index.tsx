import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from'@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import styles from './styles';

function TeacherList() {
  const [ isFiltersVisible, setFiltersVisible ] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState(''); 
  const [teachers, setTeachers] = useState([]);
  
  function handleToggleFiltersVisible() {
    setFiltersVisible(!isFiltersVisible)
  };

  async function handleFiltersSubmit() {
    loadFavorites()

    const res = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(res.data);
    setFiltersVisible(false);
  }

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if(res) {
        const favoritedTeachers = JSON.parse(res)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id
        });

        setFavorites(favoritedTeachersIds)
      }
    })
  }

	return (
		<View style={styles.container}>
      <PageHeader 
        title="Proffys Disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#04D361"/>
          </BorderlessButton>
        )}
      >
				{isFiltersVisible && (
					<View style={styles.searchForm}>
						<Text style={styles.label}>Matéria</Text>
            <TextInput
              value={subject}
              onChangeText={text => setSubject(text)} 
              style={styles.input} 
              placeholder="Qual a matéria" 
              placeholderTextColor="#C1BCCC" 
            />

						<View style={styles.inputGroup}>
							<View style={styles.inputBlock}>
								<Text style={styles.label}>Dia da semana</Text>
								<TextInput
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
									style={styles.input}
									placeholder="Qual o dia?"
									placeholderTextColor="#C1BCCC"
								/>
							</View>

							<View style={styles.inputBlock}>
								<Text style={styles.label}>Horário</Text>
								<TextInput
                  value={time}
                  onChangeText={text => setTime(text)}
									style={styles.input}
									placeholder="Qual horário?"
									placeholderTextColor="#C1BCCC"
								/>
							</View>
						</View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>
                Filtrar
              </Text>
            </RectButton>
					</View>
				)}
			</PageHeader>

			<ScrollView
				style={styles.teacherList}
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16
				}}
			>
        {teachers.map((teacher: Teacher) => (
          (
            <TeacherItem
             key={teacher.id} 
             teacher={teacher}
             favorited={favorites.includes(teacher.id)}
            />         
          )
        ))}
			</ScrollView>
		</View>
	);
}

export default TeacherList;
