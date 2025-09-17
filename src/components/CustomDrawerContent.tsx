import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

interface CustomDrawerContentProps {
  navigation: any;
  state: any;
  descriptors: any;
  userEmail?: string;
}

export default function CustomDrawerContent({ 
  navigation, 
  state, 
  descriptors, 
  userEmail = 'Usuário' 
}: CustomDrawerContentProps) {
  const handleLogout = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Auth' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://via.placeholder.com/80x80/e91e63/ffffff?text=U'
            }}
            style={styles.avatar}
          />
        </View>
        <Text style={styles.userName}>{userEmail}</Text>
        <Text style={styles.userEmail}>{userEmail}</Text>
      </View>

      <ScrollView style={styles.menuContainer}>
        <DrawerItem
          label="Início"
          onPress={() => navigation.navigate('Home')}
          labelStyle={[
            styles.menuItemLabel,
            state.routes[state.index]?.name === 'Home' && styles.activeMenuItemLabel
          ]}
          style={[
            styles.menuItem,
            state.routes[state.index]?.name === 'Home' && styles.activeMenuItem
          ]}
          icon={() => <Text style={styles.menuIcon}>🏠</Text>}
        />
        
        <DrawerItem
          label="Perfil"
          onPress={() => navigation.navigate('Profile')}
          labelStyle={[
            styles.menuItemLabel,
            state.routes[state.index]?.name === 'Profile' && styles.activeMenuItemLabel
          ]}
          style={[
            styles.menuItem,
            state.routes[state.index]?.name === 'Profile' && styles.activeMenuItem
          ]}
          icon={() => <Text style={styles.menuIcon}>👤</Text>}
        />
        
        <DrawerItem
          label="Configurações"
          onPress={() => navigation.navigate('Settings')}
          labelStyle={[
            styles.menuItemLabel,
            state.routes[state.index]?.name === 'Settings' && styles.activeMenuItemLabel
          ]}
          style={[
            styles.menuItem,
            state.routes[state.index]?.name === 'Settings' && styles.activeMenuItem
          ]}
          icon={() => <Text style={styles.menuIcon}>⚙️</Text>}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#1e40af',
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  avatarContainer: {
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  menuContainer: {
    flex: 1,
    paddingTop: 20,
  },
  menuItem: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  activeMenuItem: {
    backgroundColor: '#1e40af',
  },
  menuItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: -10,
  },
  activeMenuItemLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ff5722',
    borderRadius: 10,
    shadowColor: '#ff5722',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  logoutIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
