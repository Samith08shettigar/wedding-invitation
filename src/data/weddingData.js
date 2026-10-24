/**
 * CENTRALIZED WEDDING DATA CONFIGURATION
 * 
 * To customize this wedding invitation with real details:
 * 1. Update the names, date, venue, family details, and events below.
 * 2. Only real photographs are used for:
 *    - Bride photo
 *    - Groom photo
 *    - Optional Couple photo
 *    - Venue photo
 * 3. All other ornamental borders, envelope, wax seal, sunset palace, arches, and lanterns
 *    are code-rendered with pure HTML, CSS, and SVG!
 */

export const weddingData = {
  // Couple Names & Monogram
  brideName: "Priya Sharma",
  brideFirstName: "Priya",
  groomName: "Arjun Mehta",
  groomFirstName: "Arjun",
  monogram: "P & A",
  subtitle: "Two hearts, one journey forever",

  // Dates & Times
  weddingDate: "2027-02-15T10:30:00+05:30",
  displayDate: "15 February 2027",
  saveTheDateDay: "15",
  saveTheDateMonth: "Feb",
  saveTheDateYear: "2027",

  // Venue & Location
  venueName: "The Royal Palace",
  venueAddress: "Palace Road, Bengaluru, Karnataka, India",
  googleMapsUrl: "https://maps.google.com/?q=The+Royal+Palace+Bengaluru",

  // Formal Invitation Wording
  invitationIntro: "Together with our families we cordially invite you to the Wedding of",
  invitationMessage: "With great joy we invite you to be a part of our special day",
  invitationMessageBody: "Your presence will make our celebration even more special. We look forward to sharing this beautiful journey with you.",
  invitationClosingFamily: "The Sharma & Mehta Families",
  closingNote: "We look forward to celebrating our special day, with you!",
  thankYouMessage: "Thank You for being a part of our journey",
  endingQuote: "A new beginning of forever",

  // Parents & Family Details
  familyDetails: {
    heading: "From Our Families",
    subheading: "We are delighted to invite you to our wedding ceremony.",
    brideParents: {
      title: "Bride's Parents",
      father: "Mr. Ramesh Sharma",
      mother: "Mrs. Sunita Sharma",
    },
    groomParents: {
      title: "Groom's Parents",
      father: "Mr. Rajesh Mehta",
      mother: "Mrs. Neha Mehta",
    },
  },

  // Wedding Events Schedule
  events: [
    {
      id: "mehendi",
      title: "Mehendi Ceremony",
      date: "14 Feb 2027",
      time: "5:00 PM",
      displaySchedule: "14 Feb 2027 | 5:00 PM",
      iconType: "mehendi",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      date: "15 Feb 2027",
      time: "10:30 AM",
      displaySchedule: "15 Feb 2027 | 10:30 AM",
      iconType: "ceremony",
    },
    {
      id: "reception",
      title: "Reception",
      date: "15 Feb 2027",
      time: "6:30 PM",
      displaySchedule: "15 Feb 2027 | 6:30 PM",
      iconType: "reception",
    },
  ],

  // Photographic Assets ONLY (Real photos or high quality placeholders)
  images: {
    bridePhoto: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    groomPhoto: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80",
    couplePhoto: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    venuePhoto: "https://images.unsplash.com/photo-1599818816942-e19574347717?auto=format&fit=crop&w=800&q=80",
  },

  // Audio Configuration
  audio: {
    musicUrl: "/music/audio.mpeg",
    songTitle: "Royal Wedding Harmony",
    artist: "Wedding Celebration",
  },

  // RSVP Configuration
  rsvp: {
    deadline: "January 25, 2027",
    whatsappNumber: "919876543210",
    dietaryOptions: ["Vegetarian", "Jain", "Non-Vegetarian"],
  },
};
