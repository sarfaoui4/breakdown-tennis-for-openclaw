import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

console.log('Supabase URL:', supabaseUrl)
console.log('Service Key exists:', !!supabaseServiceKey)

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Variables d\'environnement manquantes')
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl)
  console.error('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? '***' : 'undefined')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function setupStorage() {
  try {
    console.log('🔧 Configuration de Supabase Storage pour Tennis Breakdown...')
    
    // Vérifier si le bucket existe déjà
    const { data: buckets, error: listError } = await supabase
      .storage
      .listBuckets()
    
    if (listError) {
      throw new Error(`Erreur lors de la liste des buckets: ${listError.message}`)
    }
    
    const bucketName = 'tennis-videos'
    const existingBucket = buckets?.find(b => b.name === bucketName)
    
    if (existingBucket) {
      console.log(`✅ Bucket "${bucketName}" existe déjà`)
    } else {
      // Créer le bucket
      const { error: createError } = await supabase
        .storage
        .createBucket(bucketName, {
          public: false, // Les vidéos ne sont pas publiques par défaut
          fileSizeLimit: 1024 * 1024 * 1024, // 1GB max par fichier
          allowedMimeTypes: ['video/mp4', 'video/webm', 'video/quicktime', 'video/x-msvideo', 'video/x-matroska'],
        })
      
      if (createError) {
        throw new Error(`Erreur lors de la création du bucket: ${createError.message}`)
      }
      console.log(`✅ Bucket "${bucketName}" créé avec succès`)
    }
    
    console.log('✅ Configuration Supabase Storage terminée!')
    console.log('\n📋 Instructions supplémentaires:')
    console.log('1. Aller à Storage > Buckets dans Supabase Dashboard')
    console.log('2. Vérifier que le bucket "tennis-videos" existe')
    console.log('3. Configurer les politiques dans l\'interface ou via SQL')
    
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error)
    process.exit(1)
  }
}

setupStorage()