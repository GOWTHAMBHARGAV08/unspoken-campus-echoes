
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Camera, Palette, Music } from 'lucide-react';

interface Shot {
  id: number;
  shotNumber: string;
  cameraAngle: string;
  description: string;
  duration: string;
  mood: string;
  location: string;
  lighting: string;
  movement?: string;
  dialogue?: string;
  voiceover?: string;
}

interface Scene {
  id: number;
  title: string;
  duration: string;
  description: string;
  colorPalette: string;
  musicCue: string;
  shots: Shot[];
}

const FilmBreakdown = () => {
  const [selectedScene, setSelectedScene] = useState<number>(1);

  const scenes: Scene[] = [
    {
      id: 1,
      title: "Opening - The Silent Observer",
      duration: "1:00",
      description: "Introduce our protagonist Arjun in his college environment, establishing his quiet, observant nature",
      colorPalette: "Warm golden tones, soft morning light",
      musicCue: "Gentle piano melody, ambient campus sounds",
      shots: [
        {
          id: 1,
          shotNumber: "1A",
          cameraAngle: "Wide Establishing Shot",
          description: "College campus at dawn, students walking, morning mist",
          duration: "8 sec",
          mood: "Peaceful, nostalgic",
          location: "Main campus quad",
          lighting: "Golden hour, soft natural light",
          movement: "Slow pan right to left"
        },
        {
          id: 2,
          shotNumber: "1B",
          cameraAngle: "Medium Shot",
          description: "Arjun sitting alone on library steps, books beside him, watching students pass",
          duration: "6 sec",
          mood: "Contemplative",
          location: "Library entrance",
          lighting: "Warm morning light filtering through trees",
          movement: "Static shot, slight zoom in"
        },
        {
          id: 3,
          shotNumber: "1C",
          cameraAngle: "Close-up",
          description: "Arjun's eyes tracking something off-screen, gentle smile forming",
          duration: "4 sec",
          mood: "Hopeful, tender",
          location: "Library steps",
          lighting: "Soft natural light on face",
          movement: "Handheld, intimate"
        },
        {
          id: 4,
          shotNumber: "1D",
          cameraAngle: "Point of View Shot",
          description: "What Arjun sees: Priya walking across courtyard, laughing with friends",
          duration: "6 sec",
          mood: "Dreamy, romantic",
          location: "Campus courtyard",
          lighting: "Bright, slightly overexposed for dreamlike quality",
          movement: "Slow motion, 120fps"
        },
        {
          id: 5,
          shotNumber: "1E",
          cameraAngle: "Medium Shot - Profile",
          description: "Arjun quickly looking down at his book when Priya glances his way",
          duration: "4 sec",
          mood: "Shy, nervous",
          location: "Library steps",
          lighting: "Shadows and light play across face",
          movement: "Quick rack focus from background to Arjun"
        },
        {
          id: 6,
          shotNumber: "1F",
          cameraAngle: "Insert Shot",
          description: "Arjun's notebook with doodles and her name written unconsciously",
          duration: "3 sec",
          mood: "Intimate, revealing",
          location: "Library steps",
          lighting: "Warm, focused light",
          movement: "Extreme close-up, shallow depth of field"
        }
      ]
    },
    {
      id: 2,
      title: "Middle Act 1 - Small Gestures",
      duration: "1:30",
      description: "Show Arjun's silent acts of care and his growing feelings through everyday college moments",
      colorPalette: "Warm afternoon light, golden and amber tones",
      musicCue: "Soft acoustic guitar, building emotional undertones",
      shots: [
        {
          id: 7,
          shotNumber: "2A",
          cameraAngle: "Wide Shot",
          description: "College cafeteria, bustling with students",
          duration: "5 sec",
          mood: "Busy, energetic",
          location: "College cafeteria",
          lighting: "Mixed fluorescent and natural window light",
          movement: "Steadicam through crowd"
        },
        {
          id: 8,
          shotNumber: "2B",
          cameraAngle: "Medium Shot",
          description: "Arjun watching Priya struggle with heavy books at another table",
          duration: "6 sec",
          mood: "Concerned, caring",
          location: "Cafeteria",
          lighting: "Soft window light",
          movement: "Slow push in"
        },
        {
          id: 9,
          shotNumber: "2C",
          cameraAngle: "Over-the-shoulder",
          description: "Arjun gets up, walks toward her table (camera follows from behind)",
          duration: "8 sec",
          mood: "Determined, nervous",
          location: "Cafeteria",
          lighting: "Natural progression through space",
          movement: "Handheld following shot"
        },
        {
          id: 10,
          shotNumber: "2D",
          cameraAngle: "Two Shot - Medium",
          description: "Arjun helps Priya pick up dropped books, brief moment of eye contact",
          duration: "10 sec",
          mood: "Sweet, electric",
          location: "Cafeteria",
          lighting: "Warm golden light from window",
          dialogue: "Priya: 'Thank you!' Arjun: 'No problem...'",
          movement: "Slight handheld for intimacy"
        },
        {
          id: 11,
          shotNumber: "2E",
          cameraAngle: "Close-up",
          description: "Priya's grateful smile",
          duration: "3 sec",
          mood: "Radiant, warm",
          location: "Cafeteria",
          lighting: "Soft golden hour light",
          movement: "Static, intimate framing"
        },
        {
          id: 12,
          shotNumber: "2F",
          cameraAngle: "Close-up",
          description: "Arjun's shy smile in response, trying not to stare",
          duration: "4 sec",
          mood: "Bashful, smitten",
          location: "Cafeteria",
          lighting: "Warm, slightly shadowed",
          movement: "Subtle rack focus"
        },
        {
          id: 13,
          shotNumber: "2G",
          cameraAngle: "Medium Shot",
          description: "Priya walking away, Arjun watching her leave",
          duration: "8 sec",
          mood: "Longing, bittersweet",
          location: "Cafeteria",
          lighting: "Backlighting creates silhouette",
          movement: "Slow zoom out"
        }
      ]
    },
    {
      id: 3,
      title: "Middle Act 2 - The Heart Breaks",
      duration: "1:45",
      description: "Arjun overhears Priya talking about someone she likes, crushing his hopes",
      colorPalette: "Cooler tones, late afternoon shadows",
      musicCue: "Piano melody becomes minor key, strings enter",
      shots: [
        {
          id: 14,
          shotNumber: "3A",
          cameraAngle: "Establishing Shot",
          description: "College corridor, late afternoon, long shadows",
          duration: "6 sec",
          mood: "Transitional, slightly ominous",
          location: "Main academic building corridor",
          lighting: "Harsh fluorescent mixed with golden window light",
          movement: "Slow dolly forward"
        },
        {
          id: 15,
          shotNumber: "3B",
          cameraAngle: "Medium Shot",
          description: "Arjun walking down corridor, checking his phone (typed but unsent message to Priya)",
          duration: "8 sec",
          mood: "Hopeful, nervous",
          location: "Corridor",
          lighting: "Cool fluorescent overhead",
          movement: "Handheld, following behind"
        },
        {
          id: 16,
          shotNumber: "3C",
          cameraAngle: "Insert Shot",
          description: "Phone screen showing typed message: 'Would you like to get coffee sometime?'",
          duration: "4 sec",
          mood: "Vulnerable, intimate",
          location: "Corridor",
          lighting: "Screen glow on face",
          movement: "Extreme close-up"
        },
        {
          id: 17,
          shotNumber: "3D",
          cameraAngle: "Medium Shot",
          description: "Arjun approaching corner where he hears familiar laughter",
          duration: "5 sec",
          mood: "Curious, approaching tension",
          location: "Corridor corner",
          lighting: "Transition from harsh to soft light",
          movement: "Steady approach"
        },
        {
          id: 18,
          shotNumber: "3E",
          cameraAngle: "Point of View - Peek Around Corner",
          description: "Arjun's view: Priya sitting with friends in alcove",
          duration: "6 sec",
          mood: "Hidden, voyeuristic",
          location: "Study alcove",
          lighting: "Warm natural light in alcove",
          movement: "Slightly shaky, as if hiding"
        },
        {
          id: 19,
          shotNumber: "3F",
          cameraAngle: "Medium Shot - Group",
          description: "Priya with friends, animated conversation",
          duration: "8 sec",
          mood: "Casual, friendly",
          location: "Study alcove",
          lighting: "Soft afternoon window light",
          dialogue: "Friend: 'So what's happening with Rohan?' Priya: 'I think he might ask me out!'",
          movement: "Static, eavesdropping perspective"
        },
        {
          id: 20,
          shotNumber: "3G",
          cameraAngle: "Close-up",
          description: "Priya's excited expression talking about Rohan",
          duration: "5 sec",
          mood: "Happy, glowing",
          location: "Study alcove",
          lighting: "Golden hour through window",
          dialogue: "Priya: 'I really hope so... I've liked him for months!'",
          movement: "Slight push in"
        },
        {
          id: 21,
          shotNumber: "3H",
          cameraAngle: "Close-up",
          description: "Arjun's face - realization and heartbreak",
          duration: "8 sec",
          mood: "Devastating, crushing",
          location: "Corridor",
          lighting: "Cool shadows, harsh fluorescent",
          movement: "Slow zoom in, handheld for emotion"
        },
        {
          id: 22,
          shotNumber: "3I",
          cameraAngle: "Insert Shot",
          description: "Arjun's finger hovering over 'delete' on his unsent message",
          duration: "4 sec",
          mood: "Final, defeated",
          location: "Corridor",
          lighting: "Cool blue phone screen light",
          movement: "Extreme close-up, shallow focus"
        },
        {
          id: 23,
          shotNumber: "3J",
          cameraAngle: "Wide Shot",
          description: "Arjun walking away down corridor, getting smaller in frame",
          duration: "10 sec",
          mood: "Isolated, defeated",
          location: "Corridor",
          lighting: "Cool, diminishing light",
          movement: "Static wide shot, letting him walk away"
        }
      ]
    },
    {
      id: 4,
      title: "Climax - Almost Confession",
      duration: "1:15",
      description: "Arjun almost confesses his feelings but decides against it at the last moment",
      colorPalette: "Sunset oranges and purples, dramatic lighting",
      musicCue: "Music builds to emotional peak, then sudden silence",
      shots: [
        {
          id: 24,
          shotNumber: "4A",
          cameraAngle: "Wide Shot",
          description: "College terrace/rooftop at sunset, few students around",
          duration: "8 sec",
          mood: "Dramatic, decisive",
          location: "College rooftop terrace",
          lighting: "Golden sunset, dramatic sky",
          movement: "Slow pan establishing the scene"
        },
        {
          id: 25,
          shotNumber: "4B",
          cameraAngle: "Medium Shot",
          description: "Arjun approaches Priya who's alone, looking at sunset",
          duration: "10 sec",
          mood: "Determined, nervous",
          location: "Rooftop terrace",
          lighting: "Warm sunset backlighting",
          movement: "Handheld approach shot"
        },
        {
          id: 26,
          shotNumber: "4C",
          cameraAngle: "Two Shot - Medium",
          description: "Arjun and Priya standing together, looking at view",
          duration: "12 sec",
          mood: "Peaceful, building tension",
          location: "Rooftop terrace",
          lighting: "Golden hour, rim lighting",
          dialogue: "Priya: 'Beautiful sunset...' Arjun: 'Yeah... beautiful.'",
          movement: "Static, intimate framing"
        },
        {
          id: 27,
          shotNumber: "4D",
          cameraAngle: "Close-up",
          description: "Arjun gathering courage, deep breath",
          duration: "6 sec",
          mood: "Tense, building to climax",
          location: "Rooftop terrace",
          lighting: "Warm sunset light on face",
          movement: "Slight push in"
        },
        {
          id: 28,
          shotNumber: "4E",
          cameraAngle: "Close-up",
          description: "Arjun opens mouth to speak, then sees Priya's phone lighting up with 'Rohan' calling",
          duration: "8 sec",
          mood: "Crushing realization",
          location: "Rooftop terrace",
          lighting: "Phone light mixing with sunset",
          movement: "Rack focus from face to phone"
        },
        {
          id: 29,
          shotNumber: "4F",
          cameraAngle: "Medium Shot",
          description: "Priya excitedly answers phone, Arjun steps back",
          duration: "10 sec",
          mood: "Bittersweet, final realization",
          location: "Rooftop terrace",
          lighting: "Sunset silhouettes",
          dialogue: "Priya: 'Hi Rohan!' (walks away happily)",
          movement: "Slow zoom out from Arjun"
        },
        {
          id: 30,
          shotNumber: "4G",
          cameraAngle: "Wide Shot",
          description: "Arjun alone on terrace as sun sets, Priya in background on phone",
          duration: "12 sec",
          mood: "Lonely, accepting",
          location: "Rooftop terrace",
          lighting: "Deep sunset, silhouettes",
          movement: "Static wide shot, music fades to silence"
        }
      ]
    },
    {
      id: 5,
      title: "Resolution - Peaceful Acceptance",
      duration: "1:30",
      description: "Arjun finds peace in his unspoken love, understanding that some feelings are beautiful even when unrequited",
      colorPalette: "Cool blue evening tones transitioning to warm memory flashbacks",
      musicCue: "Gentle piano returns, reflective and healing",
      shots: [
        {
          id: 31,
          shotNumber: "5A",
          cameraAngle: "Medium Shot",
          description: "Arjun in his dorm room, sitting at desk, writing in journal",
          duration: "10 sec",
          mood: "Reflective, calm",
          location: "Dorm room",
          lighting: "Cool blue evening light through window",
          movement: "Slow push in",
          voiceover: "Some stories are meant to live in silence..."
        },
        {
          id: 32,
          shotNumber: "5B",
          cameraAngle: "Insert Shot",
          description: "Journal page: 'Some love stories are not about being together...'",
          duration: "6 sec",
          mood: "Intimate, philosophical",
          location: "Dorm room",
          lighting: "Warm desk lamp light",
          movement: "Close-up, revealing words as written"
        },
        {
          id: 33,
          shotNumber: "5C",
          cameraAngle: "Close-up",
          description: "Arjun's peaceful expression as he writes",
          duration: "8 sec",
          mood: "Accepting, mature",
          location: "Dorm room",
          lighting: "Soft lamp light, blue evening backdrop",
          movement: "Static, contemplative"
        },
        {
          id: 34,
          shotNumber: "5D",
          cameraAngle: "Quick Montage - Various",
          description: "Flash montage of happy memories: Priya's smile, their brief interactions",
          duration: "15 sec",
          mood: "Nostalgic, warm",
          location: "Various college locations",
          lighting: "Warm golden tones, overexposed for memory effect",
          movement: "Quick cuts, dreamy soft focus"
        },
        {
          id: 35,
          shotNumber: "5E",
          cameraAngle: "Medium Shot",
          description: "Arjun closes journal, looks out window at campus",
          duration: "8 sec",
          mood: "Peaceful resolution",
          location: "Dorm room",
          lighting: "Evening blue hour light",
          movement: "Slow zoom out"
        },
        {
          id: 36,
          shotNumber: "5F",
          cameraAngle: "Wide Shot",
          description: "Campus at twilight, lights beginning to twinkle",
          duration: "12 sec",
          mood: "Serene, cyclical",
          location: "Campus overview",
          lighting: "Blue hour, warm building lights",
          movement: "Slow aerial pullback",
          voiceover: "They're about feeling deeply, loving purely, and finding beauty in what never was."
        },
        {
          id: 37,
          shotNumber: "5G",
          cameraAngle: "Final Title Card",
          description: "Black screen with text: 'Some love stories live only in silence.'",
          duration: "8 sec",
          mood: "Contemplative, final",
          location: "N/A",
          lighting: "Simple white text on black",
          movement: "Fade in, hold, fade out"
        }
      ]
    }
  ];

  const selectedSceneData = scenes.find(scene => scene.id === selectedScene);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            "Unspoken Campus Echoes"
          </h1>
          <p className="text-xl text-slate-600 mb-2">
            A Cinematic Short Film Breakdown
          </p>
          <p className="text-sm text-slate-500">
            Total Runtime: 7:00 minutes | College Romance Drama
          </p>
        </div>

        {/* Scene Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {scenes.map((scene) => (
            <Button
              key={scene.id}
              variant={selectedScene === scene.id ? "default" : "outline"}
              onClick={() => setSelectedScene(scene.id)}
              className="flex items-center gap-2"
            >
              <Clock className="w-4 h-4" />
              Scene {scene.id}
              <Badge variant="secondary" className="ml-2">
                {scene.duration}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Selected Scene Details */}
        {selectedSceneData && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Scene Overview */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="border-l-4 border-l-amber-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="w-5 h-5" />
                    {selectedSceneData.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{selectedSceneData.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-amber-600" />
                      <span className="font-medium">Color Palette:</span>
                    </div>
                    <p className="text-sm text-slate-600 pl-6">{selectedSceneData.colorPalette}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4 text-amber-600" />
                      <span className="font-medium">Music & Sound:</span>
                    </div>
                    <p className="text-sm text-slate-600 pl-6">{selectedSceneData.musicCue}</p>
                  </div>

                  <div className="pt-4 border-t">
                    <Badge variant="outline" className="mb-2">
                      Duration: {selectedSceneData.duration}
                    </Badge>
                    <p className="text-xs text-slate-500">
                      {selectedSceneData.shots.length} shots total
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Shot Breakdown */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Shot-by-Shot Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {selectedSceneData.shots.map((shot) => (
                      <div key={shot.id} className="border-l-2 border-slate-200 pl-6 pb-6">
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <Badge variant="default" className="bg-slate-800">
                            Shot {shot.shotNumber}
                          </Badge>
                          <Badge variant="secondary">
                            {shot.duration}
                          </Badge>
                          <Badge variant="outline" className="text-amber-700 border-amber-300">
                            {shot.mood}
                          </Badge>
                        </div>

                        <h4 className="font-semibold text-slate-800 mb-2">
                          {shot.cameraAngle}
                        </h4>

                        <p className="text-slate-600 mb-3">{shot.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-slate-700">Location:</span>
                            <p className="text-slate-600">{shot.location}</p>
                          </div>
                          <div>
                            <span className="font-medium text-slate-700">Lighting:</span>
                            <p className="text-slate-600">{shot.lighting}</p>
                          </div>
                          {shot.movement && (
                            <div>
                              <span className="font-medium text-slate-700">Camera Movement:</span>
                              <p className="text-slate-600">{shot.movement}</p>
                            </div>
                          )}
                        </div>

                        {shot.dialogue && (
                          <div className="mt-3 p-3 bg-blue-50 rounded-md border-l-2 border-blue-300">
                            <span className="font-medium text-blue-800">Dialogue:</span>
                            <p className="text-blue-700 italic">{shot.dialogue}</p>
                          </div>
                        )}

                        {shot.voiceover && (
                          <div className="mt-3 p-3 bg-amber-50 rounded-md border-l-2 border-amber-300">
                            <span className="font-medium text-amber-800">Voiceover:</span>
                            <p className="text-amber-700 italic">{shot.voiceover}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Technical Notes */}
        <Card className="mt-8 bg-slate-50">
          <CardHeader>
            <CardTitle>Production Notes</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Camera Equipment</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Primary: DSLR/Mirrorless with 24-70mm lens</li>
                <li>• 50mm f/1.4 for intimate close-ups</li>
                <li>• Handheld/Steadicam for emotional moments</li>
                <li>• Tripod for static, contemplative shots</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Key Locations</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Main campus quad and library steps</li>
                <li>• College cafeteria with large windows</li>
                <li>• Academic building corridors</li>
                <li>• Rooftop terrace for sunset scene</li>
                <li>• Dorm room for reflection scenes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FilmBreakdown;
