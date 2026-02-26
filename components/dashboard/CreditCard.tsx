import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { MotiView } from 'moti';
import Svg, { Path } from 'react-native-svg';

interface CreditCardProps {
  brand?: string;
  team?: string;
  balanceLabel?: string;
  limit?: string;
  number?: string;
  showStatus?: boolean;
  frozen?: boolean;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  brand = 'cleer',
  team = "Arian's Design Team",
  balanceLabel = '$18,240 left this month',
  limit = '$50,000 monthly limit',
  number = '•••• 4821',
  showStatus = false,
  frozen = false,
}) => {
  return (
    <MotiView 
      from={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing', duration: 500, delay: 100 }}
      style={styles.container}
    >
      {/* Subtle curved line texture pattern */}
      <View style={StyleSheet.absoluteFill}>
        <Svg width="100%" height="100%" viewBox="0 0 300 200" preserveAspectRatio="none">
          <Path 
            d="M -50 150 Q 100 -50 350 100" 
            fill="none" 
            stroke="rgba(255,255,255,0.04)" 
            strokeWidth="40" 
          />
          <Path 
            d="M -50 200 Q 150 50 350 150" 
            fill="none" 
            stroke="rgba(255,255,255,0.02)" 
            strokeWidth="20" 
          />
        </Svg>
      </View>

      <View style={styles.header}>
        <Text style={styles.brand}>{brand}</Text>
        <View style={styles.headerRight}>
          {showStatus && !frozen && <View style={styles.statusDot} />}
          <Text style={styles.team}>{team}</Text>
        </View>
      </View>
      
      <View style={styles.footer}>
        <View>
          <Text style={styles.balanceLabel}>{balanceLabel}</Text>
          <View style={styles.underline} />
          <Text style={styles.limit}>{limit}</Text>
        </View>
        <Text style={styles.number}>{number}</Text>
      </View>

      {/* Frozen Overlay */}
      {frozen && (
        <View style={styles.frozenOverlay}>
          <View style={styles.frozenBadge}>
            <Text style={styles.frozenText}>Frozen</Text>
          </View>
        </View>
      )}
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBlack,
    borderRadius: 20,
    padding: 24,
    height: 200,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 6,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.accentLime,
  },
  brand: {
    fontFamily: 'Urbanist_700Bold',
    fontSize: 20,
    color: Colors.white,
    letterSpacing: -0.5,
  },
  team: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 13,
    color: 'rgba(255,255,255,0.6)',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  balanceLabel: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 18,
    color: Colors.white,
    marginBottom: 4,
  },
  underline: {
    height: 2,
    width: 40,
    backgroundColor: Colors.accentLime,
    marginBottom: 8,
    borderRadius: 1,
  },
  limit: {
    fontFamily: 'Urbanist_400Regular',
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
  },
  number: {
    fontFamily: 'Urbanist_500Medium',
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    letterSpacing: 1,
  },
  frozenOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11, 11, 11, 0.6)',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frozenBadge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  frozenText: {
    fontFamily: 'Urbanist_600SemiBold',
    fontSize: 14,
    color: Colors.white,
    letterSpacing: 0.5,
  },
});
