export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      attempts: {
        Row: {
          answered_at: string
          correct: boolean
          id: number
          mode: string
          question_id: string
          response_ms: number | null
          run_id: string | null
          subject: string
          subtopic_id: string | null
          topic_id: string
          user_id: string
        }
        Insert: {
          answered_at?: string
          correct: boolean
          id?: never
          mode: string
          question_id: string
          response_ms?: number | null
          run_id?: string | null
          subject: string
          subtopic_id?: string | null
          topic_id: string
          user_id?: string
        }
        Update: {
          answered_at?: string
          correct?: boolean
          id?: never
          mode?: string
          question_id?: string
          response_ms?: number | null
          run_id?: string | null
          subject?: string
          subtopic_id?: string | null
          topic_id?: string
          user_id?: string
        }
        Relationships: []
      }
      bookmarks: {
        Row: {
          created_at: string
          item_id: string
          kind: string
          user_id: string
        }
        Insert: {
          created_at?: string
          item_id: string
          kind: string
          user_id?: string
        }
        Update: {
          created_at?: string
          item_id?: string
          kind?: string
          user_id?: string
        }
        Relationships: []
      }
      daily_challenge_results: {
        Row: {
          challenge_date: string
          completed_at: string
          correct: number
          duration_ms: number
          score: number
          total: number
          user_id: string
        }
        Insert: {
          challenge_date: string
          completed_at?: string
          correct: number
          duration_ms: number
          score: number
          total: number
          user_id: string
        }
        Update: {
          challenge_date?: string
          completed_at?: string
          correct?: number
          duration_ms?: number
          score?: number
          total?: number
          user_id?: string
        }
        Relationships: []
      }
      mastery: {
        Row: {
          correct_count: number
          current_streak: number
          due_at: string
          incorrect_count: number
          interval_days: number
          subject: string
          subtopic_id: string
          topic_id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          correct_count?: number
          current_streak?: number
          due_at?: string
          incorrect_count?: number
          interval_days?: number
          subject: string
          subtopic_id: string
          topic_id: string
          updated_at?: string
          user_id?: string
        }
        Update: {
          correct_count?: number
          current_streak?: number
          due_at?: string
          incorrect_count?: number
          interval_days?: number
          subject?: string
          subtopic_id?: string
          topic_id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          best_streak: number
          correct_answers: number
          created_at: string
          daily_goal: number
          display_name: string
          endless_best_streak: number
          questions_answered: number
          total_xp: number
          updated_at: string
          user_id: string
        }
        Insert: {
          best_streak?: number
          correct_answers?: number
          created_at?: string
          daily_goal?: number
          display_name?: string
          endless_best_streak?: number
          questions_answered?: number
          total_xp?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          best_streak?: number
          correct_answers?: number
          created_at?: string
          daily_goal?: number
          display_name?: string
          endless_best_streak?: number
          questions_answered?: number
          total_xp?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      question_reports: {
        Row: {
          created_at: string
          detail: string
          id: number
          question_id: string
          reason: string
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detail?: string
          id?: never
          question_id: string
          reason: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          detail?: string
          id?: never
          question_id?: string
          reason?: string
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      study_sessions: {
        Row: {
          best_streak: number
          correct_answers: number
          created_at: string
          duration_seconds: number
          id: number
          mode: string
          questions_answered: number
          user_id: string
          xp_earned: number
        }
        Insert: {
          best_streak: number
          correct_answers: number
          created_at?: string
          duration_seconds: number
          id?: never
          mode: string
          questions_answered: number
          user_id: string
          xp_earned: number
        }
        Update: {
          best_streak?: number
          correct_answers?: number
          created_at?: string
          duration_seconds?: number
          id?: never
          mode?: string
          questions_answered?: number
          user_id?: string
          xp_earned?: number
        }
        Relationships: []
      }
    }
    Views: {
      leaderboard: {
        Row: {
          accuracy: number | null
          best_streak: number | null
          display_name: string | null
          endless_best_streak: number | null
          id: string | null
          questions_answered: number | null
          total_xp: number | null
        }
        Insert: {
          accuracy?: never
          best_streak?: number | null
          display_name?: string | null
          endless_best_streak?: number | null
          id?: string | null
          questions_answered?: number | null
          total_xp?: number | null
        }
        Update: {
          accuracy?: never
          best_streak?: number | null
          display_name?: string | null
          endless_best_streak?: number | null
          id?: string | null
          questions_answered?: number | null
          total_xp?: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      record_attempt: {
        Args: {
          p_correct: boolean
          p_mode: string
          p_question_id: string
          p_response_ms: number
          p_run_id?: string
          p_subject: string
          p_subtopic_id: string
          p_topic_id: string
        }
        Returns: undefined
      }
      submit_study_session: {
        Args: {
          p_best_streak: number
          p_correct_answers: number
          p_duration_seconds: number
          p_mode: string
          p_questions_answered: number
          p_xp_earned: number
        }
        Returns: undefined
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

