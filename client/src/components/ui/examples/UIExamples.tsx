'use client'

import React, { useState } from 'react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
  Modal,
  Progress,
} from '../catalog'

export const UIExamples: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const handleButtonClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-8 space-y-12">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Tennis Breakdown - UI Components
      </h1>

      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Buttons</h2>
        <Card title="Variants de boutons" subtitle="Différents styles et états">
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button loading={loading} onClick={handleButtonClick}>
                {loading ? 'Chargement...' : 'Click me'}
              </Button>
              <Button fullWidth>Full Width Button</Button>
              <Button disabled>Disabled</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Inputs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Input standard">
            <CardContent>
              <Input
                label="Email"
                placeholder="votre@email.com"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                helperText="Entrez votre adresse email"
              />
            </CardContent>
          </Card>
          <Card title="Input avec erreur">
            <CardContent>
              <Input
                label="Mot de passe"
                type="password"
                error="Le mot de passe doit contenir au moins 8 caractères"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Badges</h2>
        <Card title="Variantes de badges">
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge variant="orange">Premium</Badge>
              <Badge variant="green">Complété</Badge>
              <Badge variant="yellow">En cours</Badge>
              <Badge variant="red">Urgent</Badge>
              <Badge variant="gray">Archivé</Badge>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              <Badge variant="orange" size="sm">Petit</Badge>
              <Badge variant="orange" size="md">Moyen</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Progress Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Progress Bars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card title="Progression par défaut">
            <CardContent>
              <Progress value={65} showLabel />
            </CardContent>
          </Card>
          <Card title="Variantes de progression">
            <CardContent className="space-y-6">
              <Progress value={80} variant="success" showLabel label="Analyse terminée" />
              <Progress value={45} variant="warning" showLabel label="En cours de traitement" />
              <Progress value={20} variant="error" showLabel label="Échec partiel" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modal Section */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Modal</h2>
        <Card title="Exemple de modale">
          <CardContent>
            <Button onClick={() => setIsModalOpen(true)}>Ouvrir la modale</Button>
          </CardContent>
        </Card>
      </section>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Confirmer l'action"
        size="md"
      >
        <div className="space-y-4">
          <p className="text-gray-300">
            Cette action ne peut pas être annulée. Êtes-vous sûr de vouloir continuer ?
          </p>
          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Annuler
            </Button>
            <Button variant="danger" onClick={() => setIsModalOpen(false)}>
              Confirmer
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
