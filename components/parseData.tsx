import { readString } from 'react-native-csv';

const csvFile = "title,url,custom_redirect,page,text,Category,Rank,Hide,isFree,isTopRated,verified,premium,ImageUrl,logoUrl\
\nXiaflex for Peyronie's Disease,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUrinary Tract Infection,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nKidney Stones,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBladder Cancer,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nErectile Dysfunction,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIncontinence,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTesticular Cancer,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nInterstitial Cystitis,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOveractive Bladder,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUrinalysis,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUroflowmetry,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCystoscopy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nProstate Specific Antigen (PSA),,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUrodynamic Testing,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCystourethrogram,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSemen Analysis,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTransurethral resection of the prostate (TURP),,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nExtracorporeal shock wave lithotripsy (ESWL),,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRobotic Prostatectomy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVasectomy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVasectomy Reversal,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUreteroscopy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOrchiectomy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSling,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPelvic Organ Prolapse (POP),,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBenign Prostatic Hyperplasia (BPH) - Rezum Water Vapor Therapy,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPenile Implant Support Program: Preoperative Instructions,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPenile Implant Support Program: Recovery Instructions,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPreparing for SpaceOAR,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nProstate Cancer Overview,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nProstate Cancer - Care Navigation,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHiperplasia Benigna de Próstata (HBP) ,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPreparación para SpaceOAR,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPrograma De Apoyo a Implantes de Pene Preoperatorio,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPrograma De Apoyo a Implantes de Pene Recuperación,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNew BPH Diagnosis - Care Navigation,,,,This basic journey is FREE for all users. ,Urology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbout Our Practice,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEducation Post Hearing Aid Evaluation,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHappenings at Our Clinic,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMeet Your Provider,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMejore la eficacia de la evaluación de audifonos (HAE),,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOver the Counter (OTC) Hearing Aid FAQs,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nYour Hearing Evaluation,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nYour Hearing Loss Consultation,,,,This is a private library for customers of CQ Partners.  Contact your CQ Partners representative for help getting started. ,Private: CQ Partners,PRIVATE,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVentricular Tachycardia (VT) ,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSupraventricular Tachycardia (SVT),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBradycardia,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nWolff-Parkinson-White (WPW) Syndrome,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBundle Branch Block,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHeart Block,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAtrioventricular Nodal Reentry Tachycardia (AVNRT),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nImplantable Cardioverter-Defibrillator (ICD) Placement,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCardiac Resynchronization Therapy (CRT) Device Implantation,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectrophysiology Study (EPS),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLeft Atrial Appendage Closure (LAAC),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCardioversion,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectrocardiogram (ECG or EKG),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStress Test,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCardiac Imaging,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectromyography (EMG),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBlood Tests,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGenetic Testing,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCoronary Artery Disease (CAD),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMyocardial Infarction (Heart attack),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nValvular Heart Disease,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPeripheral Artery Disease (PAD),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAtrial Septal Defect (ASD),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPatent Foramen Ovale (PFO),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVentricular Septal Defect (VSD),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCardiogenic Shock,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHypertrophic Cardiomyopathy,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPulmonary Embolism,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPercutaneous Coronary Intervention (PCI),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCatheter Ablation,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTranscatheter Mitral Valve Repair (TMVR),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAtrial Septal Defect (ASD) Closure,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVentricular Septal Defect (VSD) Closure,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPatent Foramen Ovale (PFO) Closure,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPatent Foramen Ovale (PFO) Closure,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIntravascular Ultrasound (IVUS),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFractional Flow Reserve (FFR) Measurement,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIntracardiac Echocardiography (ICE),,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectrophysiological Testing,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLoop Recorder Implantation,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTilt-Table Test,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nImplantable Loop Recorder (ILR) Removal,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHolter Monitor,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEvent Monitor,,,,This basic journey is FREE for all users. ,Cardiology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBreast Augmentation,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLiposuction,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRhinoplasty,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEyelid Surgery (Blepharoplasty),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbdominoplasty (Tummy Tuck),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFacelift (Rhytidectomy),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBreast Lift (Mastopexy),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBotox Injections,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFiller Injections,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBreast Reduction,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLaser Hair Removal,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLip Augmentation,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBrazilian Butt Lift,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nForehead Lift (Brow Lift),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nChin Augmentation,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEar Surgery (Otoplasty),,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nThigh Lift,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNeck Lift,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCheek Augmentation,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGynecomastia Surgery,,,,This basic journey is FREE for all users. ,Cosmetic Surgery,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nComplete Blood Count (CBC),,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBlood Chemistry Panel,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nX-Ray,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectrocardiogram (ECG or EKG),,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nComputed Tomography (CT) Scan,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMagnetic Resonance Imaging (MRI),,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUltrasound,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBiopsy,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBone Density Test (DEXA Scan),,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectroencephalogram (EEG),,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSpirometry,,,,This basic journey is FREE for all users. ,Diagnostics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbout Me,,,,This basic journey is FREE for all users. ,General ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastroesophageal Reflux Disease (GERD),,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPeptic Ulcer Disease,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nInflammatory Bowel Disease (IBD),,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIrritable Bowel Syndrome (IBS),,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastrointestinal Bleeding,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDiverticulitis,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nColon Polyps,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGallstones,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPancreatitis,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCeliac Disease,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHepatitis,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNon-Alcoholic Fatty Liver Disease (NAFLD),,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastrointestinal Motility Disorders,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastrointestinal Cancers,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastrointestinal Infections,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBarrett's Esophagus,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMalabsorption Syndromes,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFunctional Dyspepsia,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastritis,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastrointestinal Reflux Disease,,,,This basic journey is FREE for all users. ,GI,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFibroid Removal,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPregnancy,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMenstrual disorders,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nInfertility,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEndometriosis,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPolycystic ovary syndrome (PCOS),,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUterine fibroids,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMenopause,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPelvic inflammatory disease (PID),,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOvarian cysts,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCervical dysplasia,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPelvic organ prolapse,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBreast disorders,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbnormal Pap Smears,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEctopic pregnancy,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPremenstrual syndrome (PMS),,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOvarian cancer,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUterine cancer,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGestational diabetes,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaginal infections,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIncontinence,,,,This basic journey is FREE for all users. ,OB/GYN,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHER2+ Breast Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBreast Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNon-small Cell Lung Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSmall-cell Lung Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nColorectal Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nProstate Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOvarian Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLeukemia,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLymphoma,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPancreatic Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBladder Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nKidney Cancer,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTumor Resection,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLymph Node Dissection,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMastectomy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nColectomy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRobotic-assisted Hysterectomy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTotal Abdominal Hysterectomy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nChemotherapy: Overview,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTargeted Therapies,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHormone Therapy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nImmunotherapy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAntiemetics,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nExternal Beam Radiation Therapy (EBRT),,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBrachytherapy,,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nIntensity-Modulated Radiation Therapy (IMRT),,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStereotactic Radiosurgery (SRS),,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStereotactic Body Radiation Therapy (SBRT),,,,This basic journey is FREE for all users. ,Oncology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLasik Surgery,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\n\"Refractive Errors (Myopia, Hyperopia, Astigmatism)\",,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCataracts,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGlaucoma,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMacular Degeneration,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDiabetic Retinopathy,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRetinal Detachment,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDry Eye Syndrome,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nConjunctivitis (Pink Eye),,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStrabismus (Crossed Eyes),,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAmblyopia (Lazy Eye),,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nKeratoconus,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRetinitis Pigmentosa,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUveitis,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBlepharitis,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCorneal Infections,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOcular Migraines,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPtosis (Drooping Eyelid),,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nColor Vision Deficiency,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOptic Neuritis,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOrbital Fractures,,,,This basic journey is FREE for all users. ,Ophthalmology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTotal Knee Replacement,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTotal Hip Replacement,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nShoulder Arthroscopy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHip Arthroscopy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nKnee Arthroscopy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAnkle Arthroscopy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElbow Arthroscopy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOsteoarthritis,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRotator Cuff Injuries,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRotator Cuff Repair,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBursitis,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFracture Repair,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSoft Tissue Repair,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDebridement,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOsteotomy,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTendon Transfer,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nX-rays,,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMagnetic Resonance Imaging (MRI),,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBone Density Test (DEXA Scan),,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectromyography (EMG),,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNerve Conduction Studies (NCS),,,,This basic journey is FREE for all users. ,Orthopedics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTonsillitis,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUpper Respiratory Infections,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEar Infections,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAsthma,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGastroenteritis,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAllergies,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStrep Throat,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nUrinary Tract Infections,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nConjunctivitis,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSkin Infections,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEczema,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAcute Otitis Media,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCroup,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBronchiolitis,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFever,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDiarrhea,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVomiting,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAnxiety Disorders,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAttention-Deficit/Hyperactivity Disorder (ADHD),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAutism Spectrum Disorder (ASD),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nChildhood Obesity,,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Hepatitis B (HepB),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Rotavirus (RV),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\n\"Vaccine: Diphtheria, Tetanus, and Pertussis (DTaP)\",,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Haemophilus Influenzae Type B (Hib),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Pneumococcal Conjugate (PCV13),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Inactivated Poliovirus (IPV),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Influenza (Flu),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\n\"Vaccine: Measles, Mumps, Rubella (MMR)\",,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Varicella (VAR),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Hepatitis A (HepA),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Meningococcal (MenACWY),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaccine: Human Papillomavirus (HPV),,,,This basic journey is FREE for all users. ,Pediatrics  ,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAmputee Follow-Up,,,,This basic journey is FREE for all users. ,Prosthetics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNew Amputee,,,,This basic journey is FREE for all users. ,Prosthetics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nWelcome To Our Practice,,,,This basic journey is FREE for all users. ,Prosthetics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMy VA Order,,,,This basic journey is FREE for all users. ,Prosthetics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRheumatoid Arthritis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMixed Connective Tissue Disease,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nOsteoarthritis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLupus,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nGout,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAnkylosing spondylitis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPsoriatic arthritis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nJuvenile idiopathic arthritis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nScleroderma,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVasculitis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMyositis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSjögren's syndrome,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPolymyalgia rheumatica,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBehçet's disease,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nReactive arthritis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPolymyositis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDermatomyositis,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSystemic lupus erythematosus,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAntiphospholipid syndrome,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRaynaud's phenomenon,,,,This basic journey is FREE for all users. ,Rheumatology,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHerniated Disc,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSpinal Stenosis,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nScoliosis,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSpinal Fractures,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDegenerative Disc Disease,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSpinal Fusion,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDiscectomy,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLaminectomy,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nArtificial Disc Replacement,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVertebroplasty,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nKyphoplasty,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nX-rays,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMagnetic Resonance Imaging (MRI),,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nDiscography,,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nElectromyography (EMG),,,,This basic journey is FREE for all users. ,Spine,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVaricose Veins,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSpider Veins,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPelvic Congestion Syndrome,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nStasis Dermatitis,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRestless Leg Syndrome,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSuperior Mesenteric Artery Syndrome (SMAS),,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nChronic Venous Insufficiency (CVI),,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMay-Thurner Syndrome,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVenous Aneurysm,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSclerotherapy For Varicose Veins,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEndovenous Thermal Ablation for Varicose Veins,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEndovascular Thrombectomy for Vein Disease,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nRadiofrequency Ablation (RFA) For Vein Disease,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nCompression Stockings and Vein Health,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nMenopause and Vein Health,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPregnancy and Vein Health,,,,This basic journey is FREE for all users. ,Vein Clinics,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAtrial Fibrillation (AFib) ,,,,Upgrade to PRO to access this journey. ,Cardiology,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nLong QT Syndrome (LQTS),,,,Upgrade to PRO to access this journey. ,Cardiology,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nCatheter Ablation,,,,Upgrade to PRO to access this journey. ,Cardiology,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nPacemaker Implantation,,,,Upgrade to PRO to access this journey. ,Cardiology,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nInferior Turbinate Reduction Treatment for Nasal Airway Obstruction ,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nFacial Trauma,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nXprESS Sinus Balloon Dilation,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nNasal Polyps,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNasal Saline Rinse ,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nPharyngitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTreating Ear Infections with Ear Tubes,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAcute Rhinosinusitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAllergic Rhinitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nThe Propel Implant Procedure,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nSwimmer's Ear,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nINSPIRE Therapy for Obstructive Sleep Apnea – Asleep Airway Exam Education,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nClariFix for Rhinitis,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nSnoring,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTonsillitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nChronic Cough,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBalloon Sinuplasty Procedure,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nTreating Nasal Polyps With A Sinuva Implant,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nOtitis Media,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbout Inspire Therapy,,,,Upgrade to PRO to access this journey. ,ENT,PRO,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/BbnxMzSK/temp-Image5-PKpmz.avif\
\nSleep Apnea,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEar Tubes,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nBenign Paroxysmal Positional Vertigo (BPPV),,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nLaryngitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHearing,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nVertigo,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHead and Neck Cancer,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nSinusitis,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nNasal Congestion,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nEarwax Buildup,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nTonsillectomy and Adenoidectomy,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nAbout Nasal Polyps,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif\
\nHoarseness,,,,This basic journey is FREE for all users. ,ENT,BASIC,FALSE,FALSE,FALSE,FALSE,FALSE,,https://i.postimg.cc/LsPv1G54/temp-Image1a-Nyha.avif";


export function parseData() {
  const data = readString(csvFile);
  return data.data;
}
