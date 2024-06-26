import { View, Text,Image, KeyboardAvoidingView, Keyboard ,TouchableWithoutFeedback, Platform} from 'react-native'
import {Tabs} from 'expo-router'
import {icons} from '../../constants'


const TabIcon = ({icon,color,name,focused}) =>{
  return (
    <>
      <View className="items-center justify-center gap-2">
      <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{color:color}}>
        {name}
      </Text>
    </View>
    </>
    
  )
}

const TabsLayout = () => {
  return (
    <>
    
    {/* //TODO: This is the navigation bar. When user clicks on Face Screen the navbar must be hidden  */}
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#1985A1",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 65,
          },
        }}
      >
          <Tabs.Screen
        name="(ai)"
        options={{
          title: "AI",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.AI}
              color={color}
              name="AI"
              focused={focused}
            />
          ),
        }}
      />

        <Tabs.Screen
          name="knowledgebase"
          options={{
            title: "Knowledge",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.database}
                color={color}
                name="Knowledge"
                focused={focused}
              />
            ),
          }}
        />

      
        <Tabs.Screen
       
          name="fakescreen"
          options={{
            title: "Fakescreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.shield}
                color={color}
                name="Fake Screen"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
       
      </Tabs>
     
      
    </>
  );
}

export default TabsLayout