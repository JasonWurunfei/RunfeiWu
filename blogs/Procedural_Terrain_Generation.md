---
title: Procedural Terrain Generation
datetime: 2023-10-09T22:46:00.000+02:00
tags: [Unity, Procedural Generation]
---
# Procedural Terrain Generation

## Why Perlin Noise?

- **Smoothness**: Perlin noise is inherently smoother than salt-and-pepper noise. It produces continuous gradients, which can result in more natural-looking terrain features. This smoothness helps avoid sharp, unrealistic edges in generated terrain.
- **Control**: Perlin noise allows for more precise control over the generated terrain. You can adjust parameters like octaves, persistence, and lacunarity to fine-tune the terrain's characteristics, such as the scale and complexity of features.
- **Interpolation**: Perlin noise uses interpolation techniques, such as linear interpolation or cubic interpolation, to create smooth transitions between values. This results in terrain that flows more naturally.
- **Consistency**: Perlin noise generates consistent patterns, making it suitable for generating large, coherent terrain areas. The generated terrain typically lacks abrupt discontinuities.
- **Customization**: You can modify Perlin noise functions to introduce additional features like islands, mountains, valleys, and more. This flexibility makes it versatile for various terrain generation needs.   

## parameters

1. **scale**: number that determines at what distance to view the noise map.
2. **octaves**: the number of levels of detail you want you perlin noise to have.
3. **lacunarity**: number that determines how much detail is added or removed at each octave (adjusts frequency).
4. **persistence**: number that determines how much each octave contributes to the overall shape (adjusts amplitude).