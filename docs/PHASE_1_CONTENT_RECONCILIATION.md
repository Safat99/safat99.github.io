# Phase 1 / Phase 1.5 Content Reconciliation

Phase 1.5 supersedes Phase 1's exhaustive-CV assumption. Absence from the compact
CV is not evidence that a historical claim is false. No Phase 2 visual work is
included. Sources: [comprehensive profile](./ACADEMIC_PROFILE.md), current academic
CV, previous longer CV (kept private), direct artifacts, `academic-baseline`, and
[current model](../src/app/model/siteModel.ts). Last reconciled October 2026.

## Verified Current

Current CV/profile control GPA 3.50, current M.S. status, thesis/assistantship/
teaching dates, WHISPERS accepted status, professional positions, and Crawford
2025/2026 recipient years. Preserve separate research and teaching records,
3 published + 1 accepted outputs, and two-time scholarship receipt. Do not infer
an award total or turn accepted into published. Current structured Phase 1 data
remains intact. No application strategy is added to public data.

## Historically Supported

The longer CV supplements the compact CV; the following are restored:

| Item | Restoration / limits |
|---|---|
| IEOM Research & Publication Secretary | February 2021–August 2022; title, dates, and poster-competition assistance restored |
| IEOM GOLD | Chapter/team award during the tenure, never an individual award; exact year unknown (`years: []`) |
| Volunteer for Bangladesh Institute Representative | March–July 2019; liaison, children's initiatives, environment/community activities restored |
| RMA | Competition organization and community-service/academics/unity context restored; 150+ leadership scope and 17 personal participations |
| 2018 robotics mentoring | Line-follower/obstacle-avoider detail supplements the current broader workshop title |
| Health AI Receptionist | Historical microservices/face-recognition project restored; current activity status explicitly unverified |
| Pedestrian detection | Historical VGG16/VGG19/ResNet50 project restored; no guessed deployment/database stack |
| CAP/NFLE sleep-stage project | Historical CNN project restored separately from publication; TensorFlow tag awaits code evidence |
| IoT Box | DHT11, four relays, Firebase, JavaScript interface, MIT App Inventor app restored; counts/JS from longer CV, related interface/hardware details corroborated by repository |
| Mechanical vibration | Car-body scope, Arduino, sensor comparison, MATLAB/Excel and signal-processing detail restored |
| Publication summaries | Concise CNN/NFLE, conveyor sorting, and path-planning-method comparisons restored |
| ICO 2021 | Restored as conference designation; chapter publication remains 2022 |

Historical evidence is not a claim that an old project is currently ongoing.
Restoring an item does not require featuring it among the strongest projects in
later visual phases; that editorial decision remains separate.

## Directly Verified

Network outside the sandbox was available. All eight repository URLs returned
HTTP 200 with matching identities; restoring them does not assert every line of
code is solely Safat's work or that all results have been reproduced.

| Repository | Check / restoration |
|---|---|
| https://github.com/Safat99/openCV-based-Autonomous-car-with-Raspberry-Pi | Retained; README and video identity corroborate project |
| https://github.com/Safat99/IoT-Box | Retained; README is on `master`, not `main`; PCB/DHT11/web/app/MIT App Inventor details inspected |
| https://github.com/Safat99/Mechanical_Vibration_Analysis_with_MATLAB_and_Arduino | Restored; car setup, two-sensor comparison, Gaussian smoothing/bandpass/FFT verified |
| https://github.com/Safat99/audio_classifier_of_urbansound8k_dataset | Restored; GUI audio classifier identity confirmed |
| https://github.com/Safat99/Health_AI_Receptionist | Restored; project identity confirmed; no standard README found on checked main/master paths |
| https://github.com/Safat99/pedestrian_detection_with_diff_DL_model | Restored; identity confirmed; sparse README, architectural details rely on longer CV |
| https://github.com/Safat99/emergency_vehicle_detection | Restored; collaborative methodology and frameworks inspected |
| https://github.com/Safat99/Sleep_stage_classifciation_of_epilepsy_patient | Restored; README links to the sleep-scoring publication |

Additional successful checks:

- https://www.youtube.com/watch?v=_uvGQ6cCDds | matching autonomous-car title.
- https://www.youtube.com/watch?v=9XfIP5cwh9o | matching IoT Box title.
- https://www.youtube.com/watch?v=p5eDBFT5zkI | matching vibration title.
  All three returned player `status: OK`, `playableInEmbed: true`; not a manual
  end-to-end playback test. The general phrase “Video unavailable” in HTML alone
  was not used as proof of unavailability.
- https://www.linkedin.com/feed/update/urn:li:activity:6836175024676843520/ |
  HTTP 200, matching Safat/vibration/signal-processing page title; restored demo.
- https://ieomsociety.org/cuetbd/ | official roster explicitly lists Safat as
  Research & Publication Secretary; role independently confirmed. Dates, completed
  poster event involvement, and GOLD award still rely on the longer CV.
- https://link.springer.com/chapter/10.1007/978-3-030-93247-3_35 | browsing confirms
  ICO 2021, 2022 publication, topic, and two distinct Mahmud authors. Full names
  now distinguish Sarker Safat Mahmud from Sarker Shahriar Mahmud. The DOI GET
  redirects but command-line rendering encounters a challenge; that does not
  negate publisher metadata inspected in the review.
- https://onlinelibrary.wiley.com/doi/10.1002/eng2.13035 | publisher inspected in
  recovery review; authors, methods/limitations, first published 11 November 2024.
  Issue dated 2025 is a separate bibliographic date. Command-line recheck returned
  403; existing source-confirmed DOI retained, not described as inaccessible everywhere.
- https://doi.org/10.51662/jiae.v2i2.87 | HTTP 200 resolves to the matching article
  at https://asasijournal.id/index.php/jiae/article/view/87; existing DOI retained.

## Conflicting / Superseded

| Older claim | Decision |
|---|---|
| CGPA 3.83 as current | Keep 3.50; older value is superseded, not necessarily historically false |
| Hyperspectral thesis under Jan–Aug 2025 protein role | Keep separate thesis from August 2025 and earlier assistantship |
| Teaching under that research appointment | Keep separate Jan 2025–Present teaching role |
| Mentoring aggregate March 2020–Jan 2022 | Keep individual dates, including 2018 and August 2022 |
| “Universit” typo | Keep correction |
| Backend as primary academic identity | Keep research/student identity; retain professional experience as enabling strength, not a factual rejection of backend work |

## Awaiting Verification / Intentionally Left Out

| Candidate | Handling |
|---|---|
| IoT ResearchGate | Both CVs use `155-P-4`; baseline/repository use `157-P-4` with same publication ID. Fetch returned 403; no restored public paper link until identity checked |
| IoT proceedings-publication status | Compact CV summary/repository say publication; profile/output section says presentation. Keep presentation pending proceedings evidence |
| Health AI “ongoing” | Not restored; historical project explicitly says current status unverified |
| Pedestrian/emergency Flask/PostgreSQL/AWS | Not restored without project evidence; professional technologies do not establish project stacks |
| CAP TensorFlow tag | Not restored without implementation evidence |
| MRTA “dynamic distributed settings” | Retain documented strategy comparison; detailed evaluation setting awaits thesis evidence |
| BITAC “day-long” | Workshop participation retained; duration awaits evidence |
| Exact IEOM award year | No fabricated year; documented only as during tenure |
| Thesis dates / WHISPERS DOI | Still unspecified; no fabricated dates or link |
| Emergency numerical performance highlights | Tables inspected but not independently reproduced; “BBox Accuracy” definition and individual roles not established. Keep raw project-level evidence in profile, not promoted into personal site highlights |
| Backend opportunity availability | Current preference not verified; not restored as a current availability statement |

ResearchGate candidate, not verified:
https://www.researchgate.net/publication/354860121_155-P-4_Development_and_Optimization_of_a_Real-time_Server-based_IoT_Box_A_Smart_Home_Automation_System_and_its_Subsequent_Fabrication

## Personal / Optional

Travel, music, creator narratives, testimonials, and personal About preferences
remain optional; absence from the CV does not make them false. Personal sections
and navigation are preserved. Directly supported engineering-video content can
also provide project evidence, without promoting personal narrative into academic
achievement. Old personal prose removed from About need not be restored there
solely for factual completeness. Hardcoded hero/footer/travel/HTML content awaits
later visual/metadata phases; none is edited here.

## Quantitative Preparation and Attribution

Only optional `highlights?: string[]` fields plus optional scoped award evidence
links are added. No metric framework or rendering changes.

| Highlight | Attribution |
|---|---|
| 5 hyperspectral benchmark datasets | Thesis research scope, not an individual performance result |
| 3 published + 1 accepted | Coauthored publication inventory, not four published papers |
| 2 MRTA strategies | Project/thesis scope; vacancy-chain and auction-based |
| 3 MSU courses | Personal teaching support, not sole instruction |
| 50+ DurbinX APIs | Personal contribution within a team, per CV |
| 150+ RMA members | Leadership scope, not mentee count |
| 17 robotics competitions/hackathons | Personal participation, not wins or organized-event count |
| 2× Crawford, 2025/2026 | Personal award receipt; no combined $20,000 inference |
| UrbanSound8K 10 classes | Project task scope, not accuracy |
| 2 ADXL335 three-axis sensors and smoothing/bandpass/FFT | Project setup and methods |
| Emergency YOLOv4/VGG16/VGG19 methods | Explicitly collaborative project-level evidence; no sole-result attribution |
| IEOM GOLD | Team recognition, not individual quantitative achievement |

## Crawford Evidence Completion

Added the exact user-supplied [MSU Alumni Foundation article](https://www.msuaf.org/s/1584/m26/1col.aspx?sid=1584&gid=1&pgid=7156&cid=13495&ecid=13495&crid=0&calpgid=61&calcid=6670)
to the Crawford award's scoped `evidenceLinks` field and academic profile.
Its evidence scope is the **2025 inaugural cohort only**. The **2026 recipient**
and **two-time-recipient (2025/2026)** facts remain sourced to the current academic
CV/profile; the article is not independent evidence for 2026. No combined dollar
total is inferred. Browsing returned a cache miss, so this records the user-supplied
source and scope without claiming a successful independent live-page inspection.

## Verification

Build and lint passed with no warnings/errors under Node 22.23.2 / npm 10.9.8;
`git diff --check` passed. Targeted data checks verified recovered record counts,
3 published/1 accepted status, distinct sleep-paper authors, source-verified project
URLs, preserved award years, and unchanged personal/navigation data. No React, CSS, HomeView ordering, dependencies, or personal
sections are changed. No commit or push.
