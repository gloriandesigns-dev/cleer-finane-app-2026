import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/Colors';
import { MainLayout } from '../components/layout/MainLayout';
import { CreditCard } from '../components/dashboard/CreditCard';
import { CardRow } from '../components/cards/CardRow';
import { Plus } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';

export default function CardsScreen() {
  return (
    <MainLayout activeTab="control">
      <SafeAreaView style={styles.safeArea}>
        <StatusBar style="dark" />
        <View style={styles.container}>
          
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Cards</Text>
            <TouchableOpacity style={styles.addButton}>
              <Plus size={24} color={Colors.primaryBlack} />
            </TouchableOpacity>
          </View>

          <ScrollView 
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Primary Card */}
            <View style={styles.section}>
              <CreditCard showStatus={true} />
            </View>

            {/* My Cards List */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>My Cards</Text>
              <View style={styles.cardStack}>
                <CardRow name="Software Subscriptions" user="Arian Z." limit="$5,000 / mo" />
                <CardRow name="Travel & Meals" user="Arian Z." limit="$2,000 / mo" />
              </View>
            </View>

            {/* Shared Cards List */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Shared Cards</Text>
              <View style={styles.cardStack}>
                <CardRow name="AWS Infrastructure" user="Engineering Team" limit="$15,000 / mo" />
                <CardRow name="Office Supplies" user="Operations" limit="$1,000 / mo" />
              </View>
            </View>

            {/* Padding for floating nav bar */}
            <View style={{ height: 120 }} /> 
          </ScrollView>
        </View>
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 28,
    color: Colors.primaryBlack,
    letterSpacing: -0.5,
  },
  addButton: {
    padding: 4,
  },
  scrollContent: {
    paddingTop: 8,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 18,
    color: Colors.primaryBlack,
    marginBottom: 16,
  },
  cardStack: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    overflow: 'hidden',
  },
});
