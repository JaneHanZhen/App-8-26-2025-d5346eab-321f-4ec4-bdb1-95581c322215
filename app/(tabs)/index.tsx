import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

// Operation Card Component
const OperationCard = ({ 
  icon, 
  color, 
  title, 
  description 
}: { 
  icon: React.ReactNode, 
  color: string, 
  title: string, 
  description: string 
}) => (
  <View style={styles.card}>
    <View style={[styles.iconContainer, { backgroundColor: color }]}>
      {icon}
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    <TouchableOpacity style={styles.cardButton}>
      <Text style={styles.cardButtonText}>Start Learning!</Text>
    </TouchableOpacity>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Hero Section with Gradient Background */}
      <LinearGradient
        colors={['#4e54c8', '#6a70ee']}
        style={styles.heroContainer}
      >
        <SafeAreaView>
          <View style={styles.heroContent}>
            {/* Calculator Icon */}
            <View style={styles.calculatorIcon}>
              <Ionicons name="calculator" size={32} color="#FFD700" />
            </View>

            {/* Hero Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.titlePrefix}>Math is </Text>
              <Text style={styles.titleHighlight}>FUN!</Text>
            </View>

            {/* Hero Subtitle */}
            <Text style={styles.subtitle}>
              Learn math through fun games and interactive exercises. Perfect for kids of all ages!
            </Text>

            {/* CTA Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.primaryButton}>
                <Text style={styles.primaryButtonText}>Start Learning Now!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.secondaryButton}>
                <Text style={styles.secondaryButtonText}>How It Works</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      {/* Adventure Section */}
      <View style={styles.adventureSection}>
        <Text style={styles.adventureTitle}>Choose Your Math Adventure!</Text>
        <Text style={styles.adventureDescription}>
          Pick an operation to practice and start your journey to becoming a math superstar!
        </Text>

        {/* Math Operations Grid */}
        <View style={styles.operationsGrid}>
          {/* Addition Card */}
          <OperationCard
            icon={<Text style={styles.operationIcon}>+</Text>}
            color="#4285F4"
            title="Addition"
            description="Learn to add numbers together!"
          />

          {/* Subtraction Card */}
          <OperationCard
            icon={<Text style={styles.operationIcon}>−</Text>}
            color="#0FC688"
            title="Subtraction"
            description="Practice taking numbers away!"
          />

          {/* Multiplication Card */}
          <OperationCard
            icon={<Text style={styles.operationIcon}>×</Text>}
            color="#FF7D45"
            title="Multiplication"
            description="Multiply numbers like a pro!"
          />

          {/* Division Card */}
          <OperationCard
            icon={<Text style={styles.operationIcon}>÷</Text>}
            color="#B667F1"
            title="Division"
            description="Split numbers into equal parts!"
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heroContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    overflow: 'hidden',
  },
  heroContent: {
    alignItems: 'center',
    paddingTop: 20,
  },
  calculatorIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titlePrefix: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  titleHighlight: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  subtitle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: '90%',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#9F3FEB',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  secondaryButtonText: {
    color: '#555',
    fontSize: 16,
    fontWeight: '600',
  },
  adventureSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  adventureTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  adventureDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  operationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  operationIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  cardButton: {
    backgroundColor: '#9F3FEB',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    width: '100%',
    alignItems: 'center',
  },
  cardButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
});