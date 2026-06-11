---
title: "마찰계수 f와 조도 — Moody·Colebrook·Swamee-Jain"
summary: "조도계수는 관의 재료 고유값, 마찰계수 f는 조도와 유동조건(Re)을 함께 고려한 결과값. 층류와 난류에서 f를 구하는 식이 다르다."
category: "배관설계"
tags: ["마찰계수", "조도", "Colebrook", "Swamee-Jain", "Moody"]
relatedTools: ["/tools/friction-loss"]
relatedConcepts: ["pipe-friction-loss", "reynolds-number", "darcy-vs-hazen-williams"]
updated: 2026-06-11
---

## 조도계수와 마찰계수는 다른 개념

- **조도계수**($\varepsilon$ 절대조도, Manning $n$, Hazen $C$): 관 내면의 거칠기 자체를 나타내는 **재료 고유값**. 유량·유속과 무관한 물성치.
- **마찰계수 $f$**: 압력손실 계산에 쓰이는 무차원 계수. **조도 + 유동 조건(Re)을 함께** 고려해 결정되는 **결과값**.

```
절대조도(ε) + 레이놀즈수(Re)
        ↓  Moody 선도 / Colebrook
    마찰계수 (f)
        ↓  Darcy-Weisbach
    압력손실 (h_f)
```

## f의 결정

$f$는 **고정값이 없다.** 레이놀즈 수($Re$)와 상대조도($\varepsilon/D$)에 따라 그때그때 달라진다.

- **층류 ($Re <$ 약 2300)**: 거칠기와 무관하게 $f = 64/Re$
- **난류 ($Re >$ 약 4000)**: Colebrook-White 식

$$
\frac{1}{\sqrt{f}} = -2 \log_{10}\left( \frac{\varepsilon/D}{3.7} + \frac{2.51}{Re\sqrt{f}} \right)
$$

Colebrook은 음함수라 반복계산이 필요 → 실무(엑셀 등)에서는 명시적 근사식인 **Swamee-Jain 공식**을 사용한다 (오차 약 1% 내외).

> ⚠️ **층류 분기 주의**
> Swamee-Jain·Colebrook은 **난류 전제식**이다. 층류 영역에서는 반드시 $f = 64/Re$로 분기해야 한다. (HVAC 냉온수는 정상 유속이면 거의 항상 난류라 실무상 문제는 드물지만, 계산기 로직에는 분기 필수)

## 절대조도 ε 대표값 (Moody chart 기준)

| 배관 | $\varepsilon$ (mm) |
| --- | --- |
| 강관(Commercial Steel) 신관 / 흑관 신관 | 0.045~0.046 |
| 백관 (아연도강관) | 0.15 |
| 흑관 (노후·부식) | 0.9~2.0 |
| SUS | 0.015 |
| 동관 | 0.0015 |
| PVC | 0.0015 |

$\varepsilon$는 관 상태(신관/노후)에 따라 달라지는 변수다. 노후화되면 커진다.

## 일반 건축설비 배관의 f 범위 (난류, Re 10⁴~10⁶, 15~100A 기준)

| 배관 | $f$ 범위 |
| --- | --- |
| 동관 | 0.01 ~ 0.02 |
| 흑관 (신관) | 0.015 ~ 0.03 |
| 백관 | 0.02 ~ 0.04 |

관경이 작을수록, 유속이 빠를수록 $f$가 커진다. 내면이 매끄러울수록(동관 > 흑관 > 백관) $f$가 낮다.
