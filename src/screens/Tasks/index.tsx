import {
  Text,
  View,
  TextInput,
  FlatList,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import styles from './styles.tsx';
import {FC, useState} from 'react';
import {ITask, ITaskItem} from '../../constants/interfaces/interfaces.tsx';
import Title from '../../components/Title/index.tsx';
import PrimaryButton from '../../components/PrimaryButton/index.tsx';
import {Formik} from 'formik';
import * as Yup from 'yup';
import Colors from '../../constants/colors/colors.tsx';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string()
    .min(6, 'Description must be at least 6 characters')
    .required('Description is required'),
  priority: Yup.string().required('Priority is required'),
});

const Task: FC<ITask> = ({route, navigation}) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [taskItems, setTaskItems] = useState<ITaskItem[]>([]);
  const [priority, setPriority] = useState('');

  function setPriorityHandler(priority: string) {
    setPriority(priority);
    setModalIsVisible(!modalIsVisible);
  }

  const setPriorityStyle = () => {
    console.log('priority', priority);
    if (priority == 'High') {
      return styles.styleHigh;
    } else if (priority == 'Medium') {
      return styles.styleMedium;
    } else if (priority == 'Low') {
      return styles.styleLow;
    }
    else {
      return styles.notSetView
    }
  };
  // const setPriorityStyle = {
  //   High: 'red',
  //   Medium: 'yellow',
  //   Low: 'green',
  // };

  const addTaskHandler = (data: ITaskItem) => {
    console.log('sssss');
    console.log(data);
    console.log('Hi');
    setTaskItems([...taskItems, data]);
  };


  const renderItem = ({item}: {item: ITaskItem}) => {
    return (
      <View style={styles.flatListView}>
        <Text style={styles.textContainer}>{item.title}</Text>
        <Text style={styles.textContainer}>{item.description}</Text>
        <Text style={styles.textContainer}>{item.priority}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Formik
        initialValues={{title: '', description: '', priority: ''}}
        validationSchema={validationSchema}
        onSubmit={addTaskHandler}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          setValues,
        }) => (
          <View style={styles.formContainer}>
            <View style={styles.titleView}>
              <Title text="Task List" />
            </View>
            <View style={styles.innerView}>
              <Text style={styles.textContainer}>Task Title</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Enter Task Title"
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
              />
              {touched.title && errors.title && (
                <Text style={styles.errorText}>{errors.title}</Text>
              )}
              <Text style={styles.textContainer}>Description</Text>
              <TextInput
                style={styles.inputContainer}
                placeholder="Enter Task Description"
                onChangeText={handleChange('description')}
                onBlur={handleBlur('description')}
                value={values.description}
              />
              {touched.description && errors.description && (
                <Text style={styles.errorText}>{errors.description}</Text>
              )}
              <Text style={styles.textContainer}>Priority</Text>
              <Modal
                animationType="fade"
                transparent={true}
                visible={modalIsVisible}
                onRequestClose={() => {
                  Alert.alert('Modal has been closed.');
                  setModalIsVisible(!modalIsVisible);
                }}>
                <View style={styles.modalContainerView}>
                  <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>Task Priority</Text>
                    <View style={styles.modalButtonContainer}>
                      <Pressable
                        style={styles.highView}
                        onPress={() => {
                          setValues({...values, priority: 'High'});
                          setPriority('High')
                          setModalIsVisible(!modalIsVisible);
                        }}>
                        <Text style={styles.modalButtonText}>High</Text>
                      </Pressable>
                      <Pressable
                        style={styles.mediumView}
                        onPress={() => {
                          setValues({...values, priority: 'Medium'});
                          setPriority('Medium')
                          setModalIsVisible(!modalIsVisible);
                        }}>
                        <Text style={styles.modalButtonText}>Medium</Text>
                      </Pressable>
                      <Pressable
                        style={styles.lowView}
                        onPress={() => {
                          setValues({...values, priority: 'Low'});
                          setPriority('Low')
                          setModalIsVisible(!modalIsVisible);
                        }}>
                        <Text style={styles.modalButtonText}>Low</Text>
                      </Pressable>
                    </View>
                  </View>
                  {touched.priority && errors.priority && (
                <Text style={styles.errorText}>{errors.priority}</Text>
              )}
                </View>
              </Modal>
              <View style={{marginBottom: 5,}}>
                <Pressable
                  style={styles.buttonContainer}
                  onPress={() => setModalIsVisible(true)}
                  android_ripple={{color: Colors.primary500}}>
                  <Text
                    style={setPriorityStyle()}
                    >
                    {values.priority
                      ? values.priority
                      : 'Choose your Task Priority'
                      }
                  </Text>
                </Pressable>
                <PrimaryButton text="Confirm" onPress={handleSubmit} />
              </View>
              <View style={styles.flatlistContainerView}>
                <FlatList data={taskItems} renderItem={renderItem} style={{height:50}} />
              </View>
            </View>
            
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Task;
