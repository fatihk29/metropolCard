import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import CampaignListItem from '../../components/CampaingListItem';
import style from './style';

const DATA = [
  {
    id: '1',
    mainTitle: 'A101 Alisveris kodu',
    auxTitle: 'MetropolCard mobilde',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/7/7a/150px-Homer_Simpson.png/revision/latest/scale-to-width-down/150?cb=20131103071638',
    job: 'Safety Inspector',
    about:
      "Homer Jay Simpson (born May 12, 1956)[16] is the main protagonist of the series. He is the spouse of Marge Simpson and father of Bart Simpson, Lisa Simpson, and Maggie Simpson. Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him. Although Homer has many flaws, he has shown to have great caring, love, and even bravery to those he cares about and, sometimes, even others he doesn't. He serves as the main protagonist of both the TV series and the 2007 film adaptation. Homer works as a low-level safety inspector at the Springfield Nuclear Power Plant in Sector 7G, although he is often incompetent and negligent towards his duty.",
  },
  {
    id: '2',
    mainTitle: 'TC ile odeme yap',
    auxTitle: 'MetropolCard mobilde',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png/revision/latest/scale-to-width-down/300?cb=20201222215318',
    job: 'Housewife',
    about:
      'Marjorie Jacqueline "Marge" Simpson (née Bouvier[4]; born March 19, 1956) is one of the two tritagonists (alongside Lisa) of the Simpsons franchise. She is the tritagonist of The Simpsons Movie. She is the homemaker and was sometimes strict and a full-time crazy mom of the Simpson family on The Simpsons. She and her husband Homer have three children: Bart, Lisa, and Maggie. Marge is the moralistic force in her family and often provides a grounding voice in the midst of her family\'s antics by trying to maintain order in the Simpson household. Aside from her duties at home, Marge has flirted briefly with a number of careers ranging from a police officer to an anti-violence activist.',
  },
  {
    id: '3',
    mainTitle: 'Vize islemlerinde',
    auxTitle: 'MetropolCard mobilde',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png/revision/latest/scale-to-width-down/250?cb=20190409004756',
    job: 'Student',
    about:
      'Bartholomew JoJo "Bart" Simpson (born Sunday, April 1, 1979) is the deuteragonist of The Simpsons. Bart is the mischievous, rebellious, misunderstood, disruptive and "potentially dangerous" eldest child. He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie. He also has been nicknamed "Cosmo", after discovering a comet in "Bart\'s Comet". Bart has also been on the cover on numerous comics, such as "Critical Hit", "Simpsons Treasure Trove #11", and "Winter Wingding". Bart also has a 100-issue comic series entitled the Simpson Comics Presents Bart Simpson. Bart is loosely based on Matt Groening and his older brother, Mark Groening.',
  },
  {
    id: '4',
    mainTitle: 'Online Alisveriste',
    auxTitle: 'MetropolCard mobilde',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest/scale-to-width-down/247?cb=20190409004811',
    job: 'Student',
    about:
      "Lisa Marie Simpson (born May 9, 1984[8]) is the elder daughter and middle child of the Simpson family and one of the two tritagonists (alongside Marge) of The Simpsons franchise. In Homer and Lisa Exchange Cross Words she is also known as Lisa Bouvier. She was named after a train called Lil' Lisa on her parents' 1st anniversary. She is a charismatic 8-year-old girl, who exceeds the standard achievement of the intelligence level of children her age. Not to everyone's surprise, she is also the moral center of her family. In her upbringing, Lisa lacks parental involvement of Homer and Marge, which leads to hobbies such as playing saxophone and guitar, riding and caring for horses, and interest in advanced studies. In school, Lisa's popularity is affected by those who view her as a geeky overachiever, which leaves her with only a few friends. She focuses on her goals and strives to reach her potential, and at the age of eight, she is already a member of Mensa with an IQ of 159.",
  },
  {
    id: '5',
    mainTitle: 'Saglik Harcamalari',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png/revision/latest/scale-to-width-down/220?cb=20201222215325',
    job: 'Baby',
    about:
      'Margaret Evelyn "Maggie" Simpson[9] (born December 17, 1989), is the 1-year-old, and youngest, child of Marge and Homer, and the baby sister to Bart and Lisa and the tetartagonist of The Simpsons. She is often seen sucking on her pacifier, and, when she walks, she trips over her clothing and falls on her face. Because she rarely ever talks, Maggie is the least seen and heard in the Simpson family.',
  },
  {
    id: '6',
    mainTitle: 'Seyahat Harcamalarinda',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/a/a9/Abraham_Simpson.png/revision/latest/scale-to-width-down/302?cb=20201222214913',
    job: 'Retired',
    about:
      "Abraham Jebediah ”Abe” Simpson II, commonly known as Grampa Simpson, or simply as Grampa is a major character in The Simpsons and a supporting character in The Simpsons Movie. He is the patriarch of the Simpson family, the father of Homer, Herbert and Abbey Simpson, father-in-law of Marge Simpson, and the paternal grandfather of Bart, Lisa, and Maggie Simpson. He is also the ex-boyfriend of Jacqueline Bouvier, his daughter-in-law's mother (which would have made Marge and Homer brother and sister in-laws)",
  },
  {
    id: '7',
    mainTitle: 'Seyahat ve Konaklamalarda',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/1/12/Abbey_Tapped_Out.png/revision/latest/scale-to-width-down/176?cb=20191211083031',
    job: 'Retired',
    about:
      "Abbey is the daughter of Edwina, a woman with whom Abraham Simpson briefly had a relationship while he was stationed in England during World War II. It is insinuated that Abbey is the result of that relationship, which would make her Abe's daughter and Homer's half-sister. She very much looks and acts similar to Homer.",
  },
  {
    id: '8',
    mainTitle: 'Onerdikce Kazan',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/1/18/Herb_Powelll.png/revision/latest/scale-to-width-down/192?cb=20200708052654',
    job: 'Businessman',
    about:
      'Herbert "Herb" Powell is Homer Simpson\'s seldom-seen long-lost older paternal half-brother. He is around 37 years old. He was first mentioned by Abraham Simpson when Homer comes to his side after suffering a heart attack. Herbert is also the half-uncle of Bart, Lisa, and Maggie.',
  },
  {
    id: '9',
    mainTitle: 'PetroPay ile akaryakit kazan',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/1/18/Herb_Powelll.png/revision/latest/scale-to-width-down/192?cb=20200708052654',
    job: 'Businessman',
    about:
      'Herbert "Herb" Powell is Homer Simpson\'s seldom-seen long-lost older paternal half-brother. He is around 37 years old. He was first mentioned by Abraham Simpson when Homer comes to his side after suffering a heart attack. Herbert is also the half-uncle of Bart, Lisa, and Maggie.',
  },
  {
    id: '10',
    mainTitle: 'N2Mobil',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/1/18/Herb_Powelll.png/revision/latest/scale-to-width-down/192?cb=20200708052654',
    job: 'Businessman',
    about:
      'Herbert "Herb" Powell is Homer Simpson\'s seldom-seen long-lost older paternal half-brother. He is around 37 years old. He was first mentioned by Abraham Simpson when Homer comes to his side after suffering a heart attack. Herbert is also the half-uncle of Bart, Lisa, and Maggie.',
  },
  {
    id: '11',
    mainTitle: 'Mopas',
    avatar:
      'https://static.wikia.nocookie.net/simpsons/images/1/18/Herb_Powelll.png/revision/latest/scale-to-width-down/192?cb=20200708052654',
    job: 'Businessman',
    about:
      'Herbert "Herb" Powell is Homer Simpson\'s seldom-seen long-lost older paternal half-brother. He is around 37 years old. He was first mentioned by Abraham Simpson when Homer comes to his side after suffering a heart attack. Herbert is also the half-uncle of Bart, Lisa, and Maggie.',
  },
];

function MainPage({navigation}) {
  function onPressAddBtn() {
    navigation.navigate('Login');
  }
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{
          width: '10%',
          height: 20,
          borderColor: 'green',
          borderWidth: 0.4,
          borderRadius: 5,
          marginLeft: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>A-Z</Text>
      </TouchableOpacity>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          return (
            <CampaignListItem
              mainTitle={item.mainTitle}
              avatar={item.avatar}
              itemId={item.id}
              navigation={navigation}
            />
          );
        }}
        keyExtractor={item => item.id}
      />
      <View style={style.addBtnContainer}>
        <TouchableOpacity onPress={onPressAddBtn} style={style.addBtn}>
          <Text style={style.loginText}>Hemen Giris Yap</Text>
          <IconMCI name="login" size={30} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainPage;
